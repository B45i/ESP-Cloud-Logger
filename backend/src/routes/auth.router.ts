import { Router } from 'express';
import { check } from 'express-validator';
import { validateRoute } from '../middleware/validate-route';
import { login, register } from '../controllers/auth.controller';

const router: Router = Router();

router.post(
    '/register',
    [
        check('name').isLength({ min: 3 }),
        check('email').isEmail(),
        check('password').isLength({ min: 6 }),
        validateRoute,
    ],
    register
);

router.post(
    '/login',
    [
        check('email').isEmail(),
        check('password').isLength({ min: 6 }),
        validateRoute,
    ],
    login
);

export default router;
