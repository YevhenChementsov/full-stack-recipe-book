import { NextFunction, Request, Response } from 'express';

type Controller = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export const ctrlWrapper = (ctrl: Controller) => {
  const fn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return fn;
};
