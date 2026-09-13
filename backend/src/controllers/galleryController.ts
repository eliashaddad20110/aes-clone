import { Request, Response } from 'express';
import db from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export const getAllGalleryImages = (req: Request, res: Response) => {
  try {
    const images = db.prepare('SELECT * FROM gallery_images ORDER BY display_order ASC, created_at DESC').all();
    res.json({ images });
  } catch (error) {
    console.error('Get gallery images error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const addGalleryImage = (req: Request, res: Response) => {
  try {
    const { title, alt_text, url, caption_en, caption_de, display_order } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'Image URL is required' });
    }

    const id = uuidv4();

    db.prepare(`
      INSERT INTO gallery_images (id, title, alt_text, url, caption_en, caption_de, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      title || null,
      alt_text || null,
      url,
      caption_en || null,
      caption_de || null,
      display_order || 0
    );

    res.status(201).json({ message: 'Image added to gallery', id });
  } catch (error) {
    console.error('Add gallery image error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateGalleryImage = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, alt_text, url, caption_en, caption_de, display_order } = req.body;

    const existing = db.prepare('SELECT * FROM gallery_images WHERE id = ?').get(id);
    if (!existing) {
      return res.status(404).json({ error: 'Image not found' });
    }

    db.prepare(`
      UPDATE gallery_images 
      SET title = ?, alt_text = ?, url = ?, caption_en = ?, caption_de = ?, display_order = ?
      WHERE id = ?
    `).run(
      title || null,
      alt_text || null,
      url,
      caption_en || null,
      caption_de || null,
      display_order || 0,
      id
    );

    res.json({ message: 'Image updated' });
  } catch (error) {
    console.error('Update gallery image error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteGalleryImage = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const result = db.prepare('DELETE FROM gallery_images WHERE id = ?').run(id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Image not found' });
    }

    res.json({ message: 'Image deleted' });
  } catch (error) {
    console.error('Delete gallery image error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
