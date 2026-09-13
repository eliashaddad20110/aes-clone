import { Request, Response } from 'express';
import db from '../config/database';
import { v4 as uuidv4 } from 'uuid';
import { sanitizeInput } from '../utils/auth';

export const submitContact = (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const id = uuidv4();
    const ipAddress = req.ip || req.socket.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    db.prepare(`
      INSERT INTO contact_submissions (id, name, email, subject, message, ip_address, user_agent, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id,
      sanitizeInput(name),
      sanitizeInput(email),
      sanitizeInput(subject),
      sanitizeInput(message),
      ipAddress,
      userAgent,
      'unread'
    );

    res.status(201).json({ message: 'Contact submission received successfully' });
  } catch (error) {
    console.error('Submit contact error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getAllSubmissions = (req: Request, res: Response) => {
  try {
    const submissions = db.prepare('SELECT * FROM contact_submissions ORDER BY created_at DESC').all();
    res.json({ submissions });
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateSubmissionStatus = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['unread', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const result = db.prepare('UPDATE contact_submissions SET status = ? WHERE id = ?').run(status, id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    res.json({ message: 'Status updated' });
  } catch (error) {
    console.error('Update submission error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteSubmission = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const result = db.prepare('DELETE FROM contact_submissions WHERE id = ?').run(id);

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    res.json({ message: 'Submission deleted' });
  } catch (error) {
    console.error('Delete submission error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
