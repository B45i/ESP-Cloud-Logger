import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import HttpStatusCodes from 'http-status-codes';

export const validateRoute = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response
            .status(HttpStatusCodes.BAD_REQUEST) // todo: use error handling mw
            .json({ errors: errors.array() });
    }
    next();
};
