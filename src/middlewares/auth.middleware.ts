import { NextFunction, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserAuthRequest } from '../interfaces/user.interface';

const userAuth = async ( 
  req: UserAuthRequest,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not foud' });
  }

  try { 
    const secret = process.env.JWT_SECRET || 'defaultsecret';
    const result = jwt.verify(authorization, secret);

    req.userInfo = result as JwtPayload;

    next();
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};

export default userAuth;