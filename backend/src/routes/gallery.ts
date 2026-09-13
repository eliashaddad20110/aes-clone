import express from 'express';
import { getAllGalleryImages, addGalleryImage, updateGalleryImage, deleteGalleryImage } from '../controllers/galleryController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.get('/', getAllGalleryImages);
router.post('/', authenticateToken, addGalleryImage);
router.put('/:id', authenticateToken, updateGalleryImage);
router.delete('/:id', authenticateToken, deleteGalleryImage);

export default router;
