import { Request, Response, NextFunction } from 'express';
import { IUser, User } from '../models/User';
import { HttpError } from '../models/http-error';
import HttpStatusCodes from 'http-status-codes';
import jwt from 'jsonwebtoken';

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

export const login = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { email, password } = request.body;
    let user;

    try {
        user = await User.findOne({ email });
    } catch (error) {
        return next(error);
    }

    if (!user) {
        return next(
            new HttpError(
                'User with given email not found',
                HttpStatusCodes.NOT_FOUND
            )
        );
    }

    const isMatch = await user.validatePassword(password);
    if (!isMatch) {
        return next(
            new HttpError('Invalid Credentials', HttpStatusCodes.BAD_REQUEST)
        );
    }

    const accessToken = jwt.sign(
        {
            email: user.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '24h' }
    );

    response.json({ accessToken });
};
