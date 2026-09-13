import express from 'express';
import { getAllStaff, getStaffById, createStaff, updateStaff, deleteStaff } from '../controllers/staffController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.get('/', getAllStaff);
router.get('/:id', getStaffById);
router.post('/', authenticateToken, createStaff);
router.put('/:id', authenticateToken, updateStaff);
router.delete('/:id', authenticateToken, deleteStaff);

export default router;
