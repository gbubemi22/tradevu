import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { ValidationError } from "./errors.js";
import { RoleType } from "../modules/user/type.js";

const validatePasswordString = Joi.string()
  .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)
  .min(6)
  .max(100)
  .required()
  .messages({
    "string.pattern.base":
      "Password must contain a capital letter, number, special character & greater than 8 digits.",
  });

const fileSchema = Joi.object({
  fieldname: Joi.string().required(),
  originalname: Joi.string().required(),
  encoding: Joi.string().required(),
  mimetype: Joi.string().required(),
  buffer: Joi.binary().required(),
  size: Joi.number().required(),
});

const validate = (
  schema: any,
  object: any,
  option = { abortEarly: true, allowUnknown: false }
) => {
  const check = schema.validate(object, option);
  if (check.error) {
    throw new ValidationError(check.error.details[0].message);
  }
  return check.value;
};

export function joiValidator(constraint: any, isMiddleware = true): any {
  if (!constraint)
    throw new ValidationError(
      "Kindly supply validation schema to joiValidator"
    );

  if (!isMiddleware) {
    return validate(constraint.schema, constraint.data, constraint.option);
  }
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (constraint.body) {
        req.body = validate(
          constraint.body.schema,
          req.body,
          constraint.body.options
        );
      }
      if (constraint.params)
        req.params = validate(
          constraint.params.schema,
          req.params,
          constraint.params.options
        );
      if (constraint.query)
        req.query = validate(
          constraint.query.schema,
          req.query,
          constraint.query.options
        );
      if (constraint.headers)
        req.headers = validate(
          constraint.headers.schema,
          req.headers,
          constraint.headers.options
        );

      return next();
    } catch (err) {
      next(err);
    }
  };
}

export default {
  create: {
    body: {
      schema: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string()
          .required()
          .email()
          .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
        password: validatePasswordString,
        phoneNumber: Joi.string().required(),
        role: Joi.string().valid(...Object.values(RoleType)).required(),
      }),
    },
  },
  logIn: {
    body: {
      schema: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
      }),
    },
  },

  logout: {
    params: {
      schema: Joi.object({
        id: Joi.string().required(),
      }),
    },
  },
};
