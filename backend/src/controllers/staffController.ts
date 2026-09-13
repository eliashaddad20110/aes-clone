import { Request, Response } from 'express';
import db from '../config/database';
import { v4 as uuidv4 } from 'uuid';
import { sanitizeInput } from '../utils/auth';

export const getAllStaff = (req: Request, res: Response) => {
  try {
    const category = req.query.category as string;
    
    let query = 'SELECT * FROM staff_members';
    let params: any[] = [];
    
    if (category) {
      query += ' WHERE category = ?';
      params.push(category);
    }
    
    query += ' ORDER BY display_order ASC, name ASC';

    const stmt = db.prepare(query);
    const staff = params.length > 0 ? stmt.all(...params) : stmt.all();
    
    res.json({ staff });
  } catch (error) {
    console.error('Get staff error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getStaffById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const staff = db.prepare('SELECT * FROM staff_members WHERE id = ?').get(id);
    
    if (!staff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }

    res.json({ staff });
  } catch (error) {
    console.error('Get staff by ID error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const createStaff = (req: Request, res: Response) => {
  try {
    const { name, position_en, position_de, category, bio_en, bio_de, photo_url, email, display_order } = req.body;

    if (!name || !position_en || !category) {
      return res.status(400).json({ error: 'Name, position (English), and category are required' });
    }

    const validCategories = ['administration', 'teachers', 'staff', 'board'];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    const id = uuidv4();

    db.prepare(`
      INSERT INTO staff_members (id, name, position_en, position_de, category, bio_en, bio_de, photo_url, email, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      sanitizeInput(name),
      sanitizeInput(position_en),
      position_de ? sanitizeInput(position_de) : null,
      category,
      bio_en ? sanitizeInput(bio_en) : null,
      bio_de ? sanitizeInput(bio_de) : null,
      photo_url || null,
      email || null,
      display_order || 0
    );

    res.status(201).json({ message: 'Staff member created', id });
  } catch (error) {
    console.error('Create staff error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateStaff = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, position_en, position_de, category, bio_en, bio_de, photo_url, email, display_order } = req.body;

    const existing = db.prepare('SELECT * FROM staff_members WHERE id = ?').get(id);
    if (!existing) {
      return res.status(404).json({ error: 'Staff member not found' });
    }

    db.prepare(`
      UPDATE staff_members 
      SET name = ?, position_en = ?, position_de = ?, category = ?, bio_en = ?, bio_de = ?, photo_url = ?, email = ?, display_order = ?
      WHERE id = ?
    `).run(
      sanitizeInput(name),
      sanitizeInput(position_en),
      position_de ? sanitizeInput(position_de) : null,
      category,
      bio_en ? sanitizeInput(bio_en) : null,
      bio_de ? sanitizeInput(bio_de) : null,
      photo_url || null,
      email || null,
      display_order || 0,
      id
    );

    res.json({ message: 'Staff member updated' });
  } catch (error) {
    console.error('Update staff error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteStaff = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const result = db.prepare('DELETE FROM staff_members WHERE id = ?').run(id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Staff member not found' });
    }

    res.json({ message: 'Staff member deleted' });
  } catch (error) {
    console.error('Delete staff error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
