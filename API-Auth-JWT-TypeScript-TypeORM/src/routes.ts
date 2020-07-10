import { Router } from 'express';

import authMiddleware from './app/middlewares/AuthMiddleware';

import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.get('/users', UserController.index);

export default router;