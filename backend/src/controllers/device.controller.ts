import { Request, Response, NextFunction } from 'express';
import { IDevice, Device } from '../models/Device';
import { HttpError } from '../models/http-error';
import { User } from '../models/User';
import HttpStatusCodes from 'http-status-codes';

export const createDevice = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const device: IDevice = request.body;
    const email = request.user.email;

    try {
        const user = await User.findOne({ email }).select('-password');

        if (!user) {
            throw new HttpError('User not found', HttpStatusCodes.UNAUTHORIZED);
        }

        device.user = user;

        const deviceToCreate = new Device(device);
        await deviceToCreate.save();
        return response.json(deviceToCreate);
    } catch (error) {
        throw error;
    }
};
