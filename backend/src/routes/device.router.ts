import express, { Request, Response } from 'express';

export const deviceRouter = express.Router();

deviceRouter.get('/', async (req: Request, res: Response) => {
    res.send('device hello');
});
