import { Request, Response, NextFunction } from "express";

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

const catchAsyncError: any =
  (func: AsyncFunction) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };

export default catchAsyncError;
