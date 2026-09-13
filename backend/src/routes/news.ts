import express from 'express';
import { getAllNews, getNewsById, createNews, updateNews, deleteNews } from '../controllers/newsController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.get('/', getAllNews);
router.get('/:id', getNewsById);
router.post('/', authenticateToken, createNews);
router.put('/:id', authenticateToken, updateNews);
router.delete('/:id', authenticateToken, deleteNews);

export default router;
