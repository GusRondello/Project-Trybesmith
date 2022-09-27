import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface User {
  id?: number
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface UserAuthRequest extends Request {
  userInfo?: JwtPayload
}