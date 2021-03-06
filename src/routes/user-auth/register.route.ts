import express from 'express';
import { register } from '../../controllers/index';

const router = express.Router();

router.post('/api/register', register);

export default router;
