import { Router } from 'express';
import { createDevice } from '../controllers/device.controller';
import { authenticateToken } from '../middleware/authenticate-token';

const router: Router = Router();

router.post('/create', [authenticateToken], createDevice);

export default router;
