import { Request, Response, NextFunction } from 'express';
import { IDevice, Device } from '../models/Device';

export const createDevice = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const device: IDevice = request.body;
    return response.send(request.user);

    const deviceToCreate = new Device(device);
    try {
        await deviceToCreate.save();
    } catch (error) {
        throw error;
    }
    return deviceToCreate;
};
