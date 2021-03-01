import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  // do whatever you want
  if (!errors.isEmpty()) res.status(400).send(errors);
  next();
};
