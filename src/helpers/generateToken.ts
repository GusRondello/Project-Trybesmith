import jwt from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

export default function generateToken(user: User): string {
  const secret = process.env.JWT_SECRET || 'defaultsecret';
  
  const token = jwt.sign({ user }, secret);

  return token;
}