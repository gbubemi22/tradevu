import { StatusCodes } from "http-status-codes";
import { Controller } from "../../utils/constant.js";
import { create, listSupplier, login } from "./service.js";

export const Create: Controller = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json(await create(req.body));
  } catch (error) {
    next(error);
  }
};

export const Login: Controller = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    res.status(StatusCodes.CREATED).json(await login(email, password));
  } catch (error) {
    next(error);
  }
};



export const ListSupplier: Controller = async (req, res, next) => {
     try {
       res.status(StatusCodes.OK)
       .json(await listSupplier())   
     } catch (error) {
        next(error)  
     }
}