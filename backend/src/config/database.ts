import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.join(__dirname, '../../database.db'));

db.pragma('journal_mode = WAL');

export const initializeDatabase = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS news_posts (
      id TEXT PRIMARY KEY,
      title_en TEXT NOT NULL,
      title_de TEXT,
      content_en TEXT NOT NULL,
      content_de TEXT,
      excerpt_en TEXT,
      excerpt_de TEXT,
      image_url TEXT,
      author_id TEXT,
      published BOOLEAN DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (author_id) REFERENCES users(id)
    );

    CREATE TABLE IF NOT EXISTS gallery_images (
      id TEXT PRIMARY KEY,
      title TEXT,
      alt_text TEXT,
      url TEXT NOT NULL,
      caption_en TEXT,
      caption_de TEXT,
      display_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS contact_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      ip_address TEXT,
      user_agent TEXT,
      status TEXT DEFAULT 'unread',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS staff_members (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      position_en TEXT NOT NULL,
      position_de TEXT,
      category TEXT NOT NULL,
      bio_en TEXT,
      bio_de TEXT,
      photo_url TEXT,
      email TEXT,
      display_order INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS csrf_tokens (
      token TEXT PRIMARY KEY,
      expires_at INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX IF NOT EXISTS idx_news_published ON news_posts(published, created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_gallery_order ON gallery_images(display_order);
    CREATE INDEX IF NOT EXISTS idx_staff_category ON staff_members(category, display_order);
    CREATE INDEX IF NOT EXISTS idx_csrf_expires ON csrf_tokens(expires_at);
  `);

  console.log('Database initialized successfully');
};

export default db;
