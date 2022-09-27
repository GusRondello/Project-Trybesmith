import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const errorMiddleware = async (
  _err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<Response> => res.status(StatusCodes.INTERNAL_SERVER_ERROR)
  .json({ message: 'Internal Server Error' });
  
export default errorMiddleware;