import { Router, Request, Response, request } from 'express';

const router: Router = Router();

router.get('/', async (request: Request, response: Response) => {
    return response.send('device working');
});

export default router;
