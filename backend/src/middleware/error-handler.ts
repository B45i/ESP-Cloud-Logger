import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.headersSent) {
        return next(error);
    }

    res.status(error.code || 500).json({
        errors: [
            {
                msg: error.message || 'An Unknown error has occurred',
            },
        ],
    });
};
