import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { IUser, User } from '../models/User';
import { HttpError } from '../models/http-error';
import HttpStatusCodes from 'http-status-codes';

export const register = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const userToCreate: IUser = request.body;
    let existingUser: IUser | null;
    try {
        existingUser = await await User.findOne({ email: userToCreate.email });
    } catch (error) {
        return next(error);
    }

    if (existingUser) {
        return next(
            new HttpError('User already exists', HttpStatusCodes.BAD_REQUEST)
        );
    }

    const createdUser = new User(userToCreate);

    try {
        await createdUser.save();
    } catch (error) {
        return next(error);
    }

    return response.status(HttpStatusCodes.CREATED).json({ userToCreate });
};

export const signIn = async (email: string, password: string) => {
    // let user!: IUser | null;
    // try {
    //     user = await findUserByEmail(email);
    // } catch (error) {
    //     throw error;
    // }
    // if (!user) {
    //     throw new Error(`User Doesn't exist`);
    // }
};
