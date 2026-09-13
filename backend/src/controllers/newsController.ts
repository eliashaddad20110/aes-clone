import { Request, Response } from 'express';
import db from '../config/database';
import { v4 as uuidv4 } from 'uuid';
import { sanitizeInput } from '../utils/auth';

export const getAllNews = (req: Request, res: Response) => {
  try {
    const publishedOnly = req.query.published !== 'false';
    
    let query = 'SELECT * FROM news_posts';
    if (publishedOnly) {
      query += ' WHERE published = 1';
    }
    query += ' ORDER BY created_at DESC';

    const news = db.prepare(query).all();
    res.json({ news });
  } catch (error) {
    console.error('Get news error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getNewsById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const news = db.prepare('SELECT * FROM news_posts WHERE id = ?').get(id);
    
    if (!news) {
      return res.status(404).json({ error: 'News post not found' });
    }

    res.json({ news });
  } catch (error) {
    console.error('Get news by ID error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const createNews = (req: any, res: Response) => {
  try {
    const { title_en, title_de, content_en, content_de, excerpt_en, excerpt_de, image_url, published } = req.body;
    const user: any = req.user;

    if (!title_en || !content_en) {
      return res.status(400).json({ error: 'English title and content are required' });
    }

    const id = uuidv4();
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO news_posts (id, title_en, title_de, content_en, content_de, excerpt_en, excerpt_de, image_url, author_id, published, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      sanitizeInput(title_en),
      title_de ? sanitizeInput(title_de) : null,
      sanitizeInput(content_en),
      content_de ? sanitizeInput(content_de) : null,
      excerpt_en ? sanitizeInput(excerpt_en) : null,
      excerpt_de ? sanitizeInput(excerpt_de) : null,
      image_url || null,
      user.id,
      published ? 1 : 0,
      now,
      now
    );

    res.status(201).json({ message: 'News post created', id });
  } catch (error) {
    console.error('Create news error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateNews = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title_en, title_de, content_en, content_de, excerpt_en, excerpt_de, image_url, published } = req.body;

    const existing = db.prepare('SELECT * FROM news_posts WHERE id = ?').get(id);
    if (!existing) {
      return res.status(404).json({ error: 'News post not found' });
    }

    const now = new Date().toISOString();

    db.prepare(`
      UPDATE news_posts 
      SET title_en = ?, title_de = ?, content_en = ?, content_de = ?, 
          excerpt_en = ?, excerpt_de = ?, image_url = ?, published = ?, updated_at = ?
      WHERE id = ?
    `).run(
      sanitizeInput(title_en),
      title_de ? sanitizeInput(title_de) : null,
      sanitizeInput(content_en),
      content_de ? sanitizeInput(content_de) : null,
      excerpt_en ? sanitizeInput(excerpt_en) : null,
      excerpt_de ? sanitizeInput(excerpt_de) : null,
      image_url || null,
      published ? 1 : 0,
      now,
      id
    );

    res.json({ message: 'News post updated' });
  } catch (error) {
    console.error('Update news error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteNews = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const result = db.prepare('DELETE FROM news_posts WHERE id = ?').run(id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'News post not found' });
    }

    res.json({ message: 'News post deleted' });
  } catch (error) {
    console.error('Delete news error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
