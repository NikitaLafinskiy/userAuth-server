import express, { Request, Response, NextFunction } from 'express';
import { login } from '../../controllers';
import passport from 'passport';

const router = express.Router();

router.post('/api/login', passport.authenticate('local'), login);

export default router;
