import bcrypt from 'bcrypt';
import { IUser, User } from '../models/User';

export const createUser = async (newUser: IUser) => {
    const existingUser = await findUserByEmail(newUser.email);
    if (existingUser) {
        // todo handle error
        console.log('existing user');

        return;
    }
    const userToCreate = new User({
        ...newUser,
        password: await bcrypt.hash(newUser.password, 10),
    });
    try {
        await userToCreate.save();
    } catch (error) {
        throw error;
    }
};

export const findUserByEmail = async (email: string) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw error;
    }
};
