import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';

const schema = (body: object) => Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.empty': '"username" is required',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.empty': '"classe" is required',
  }),
  level: Joi.number().greater(1).required().messages({
    'string.empty': '"level" is required',
    'number.greater': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).required().messages({
    'string.empty': '"password" is required',
  }),
}).validate(body);

const validateUser = async (
  req:Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  const { error } = schema(req.body);

  if (error) {
    let errorStatus = StatusCodes.UNPROCESSABLE_ENTITY;

    if (error.details[0].type === 'any.required' || error.details[0].type === 'string.empty') {
      errorStatus = StatusCodes.BAD_REQUEST;
    }

    return res.status(errorStatus).json({ message: error.message });
  }
  
  next();
};

export default validateUser;