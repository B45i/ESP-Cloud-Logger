import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../models/http-error';
import HttpStatusCodes from 'http-status-codes';
import jwt, { VerifyErrors } from 'jsonwebtoken';

export const authenticateToken = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const authHeader = (request.headers as any).authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return next(
            new HttpError(
                'You are not authorized to access this resource.',
                HttpStatusCodes.UNAUTHORIZED
            )
        );
    }

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err: VerifyErrors, jwtPayload: any) => {
            if (err) {
                return next(
                    new HttpError(
                        'Unable to verify user',
                        HttpStatusCodes.UNAUTHORIZED
                    )
                );
            }
            request.user = jwtPayload;
            next();
        }
    );
};
