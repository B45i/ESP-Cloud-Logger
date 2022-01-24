import { Router, Request, Response } from 'express';
import { check } from 'express-validator';
import { validateRoute } from '../middleware/validate-route';
import { IUser } from '../models/User';
import { createUser } from '../services/user.service';

const router: Router = Router();

router.post(
    '/signup',
    [
        check('name').isLength({ min: 3 }),
        check('email').isEmail(),
        check('password').isLength({ min: 6 }),
        validateRoute,
    ],
    async (request: Request, response: Response) => {
        try {
            const userToCreate: IUser = request.body;
            await createUser(userToCreate);
            return response.send(userToCreate);
        } catch (error) {}
    }
);

export default router;
