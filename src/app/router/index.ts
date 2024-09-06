import { Router } from "express";
import UserRoute from "../modules/user/index.js";
import OrderRoute from "../modules/order/index.js";

const USER = `/v1/auth`;
const ORDER = `/v1/orders`;

const route = Router();

route.use(USER, UserRoute);
route.use(ORDER, OrderRoute);

export default route;
