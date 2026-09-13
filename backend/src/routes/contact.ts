import express from 'express';
import { submitContact, getAllSubmissions, updateSubmissionStatus, deleteSubmission } from '../controllers/contactController';
import { authenticateToken } from '../middleware/auth';
import { csrfProtection } from '../middleware/csrf';

const router = express.Router();

router.post('/', csrfProtection, submitContact);
router.get('/', authenticateToken, getAllSubmissions);
router.patch('/:id/status', authenticateToken, updateSubmissionStatus);
router.delete('/:id', authenticateToken, deleteSubmission);

export default router;
