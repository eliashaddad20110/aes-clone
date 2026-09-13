import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';

import authRoutes from './routes/auth';
import newsRoutes from './routes/news';
import contactRoutes from './routes/contact';
import staffRoutes from './routes/staff';
import galleryRoutes from './routes/gallery';
import csrfRoutes from './routes/csrf';
import { initializeDatabase } from './config/database';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/auth/', limiter);
app.use('/api/contact/', limiter);

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/csrf', csrfRoutes);

app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

initializeDatabase();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
