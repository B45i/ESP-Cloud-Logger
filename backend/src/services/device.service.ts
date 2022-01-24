import { IDevice, Device } from '../models/Device';

export const createDevice = async (device: IDevice) => {
    const deviceToCreate = new Device(device);
    try {
        await deviceToCreate.save();
    } catch (error) {
        throw error;
    }
    return deviceToCreate;
};
