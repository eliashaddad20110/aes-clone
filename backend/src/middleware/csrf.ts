import { Request, Response, NextFunction } from 'express';
import db from '../config/database';
import { generateCSRFToken } from '../utils/auth';

export const csrfProtection = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'GET' || req.method === 'HEAD' || req.method === 'OPTIONS') {
    return next();
  }

  const token = req.headers['x-csrf-token'] as string;

  if (!token) {
    return res.status(403).json({ error: 'CSRF token missing' });
  }

  const stmt = db.prepare('SELECT * FROM csrf_tokens WHERE token = ? AND expires_at > ?');
  const result = stmt.get(token, Date.now());

  if (!result) {
    return res.status(403).json({ error: 'Invalid or expired CSRF token' });
  }

  db.prepare('DELETE FROM csrf_tokens WHERE token = ?').run(token);
  
  next();
};

export const generateCSRF = (req: Request, res: Response) => {
  const token = generateCSRFToken();
  const expiresAt = Date.now() + 3600000;

  db.prepare('INSERT INTO csrf_tokens (token, expires_at) VALUES (?, ?)').run(token, expiresAt);
  
  db.prepare('DELETE FROM csrf_tokens WHERE expires_at < ?').run(Date.now());

  res.json({ csrfToken: token });
};
