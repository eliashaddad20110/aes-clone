import express from 'express';
import { generateCSRF } from '../middleware/csrf';

const router = express.Router();

router.get('/', generateCSRF);

export default router;
