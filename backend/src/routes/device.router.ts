import { Router, Request, Response } from 'express';
import { IDevice } from '../models/Device';
import { createDevice } from '../controllers/device.controller';

const router: Router = Router();

router.post('/create', async (request: Request, response: Response) => {
    const deviceToCreate: IDevice = request.body;
    try {
        await createDevice(deviceToCreate);
    } catch (error) {}
});

export default router;
