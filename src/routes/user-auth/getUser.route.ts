import express from 'express';
import { getUser } from '../../controllers';

const router = express.Router();

router.get('/api/getUser', getUser);

export default router;
