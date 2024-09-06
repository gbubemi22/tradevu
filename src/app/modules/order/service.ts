import { generateRandomString } from "../../utils/util.js";
import { BadRequestError, NotFoundError } from "../../utils/errors.js";
import User from "../user/model.js";
import Order from "./model.js";
import { CsvDataType, OrderDataType } from "./types.js";
import mongoose from "mongoose";

export const create = async (payload: OrderDataType) => {
  const {
    userId,
    supplierId,
    dueDate,
    paymentMethod,
    paymentTerms,
    items,
    notes,
  } = payload;

  const checkUser = await User.findById(userId);

  if (!checkUser) throw new NotFoundError(`User Not found`);

  if (!mongoose.Types.ObjectId.isValid(supplierId)) {
    throw new BadRequestError("Invalid supplierId format");
  }

  const checkSuppier = await User.findOne({ _id: supplierId });

  console.log("Supplier ID:", supplierId);

  if (!checkSuppier) throw new NotFoundError(`User Not found`);

  const itemTotals = items.map((item) => {
    const total = item.price * item.quantity;
    return { ...item, total };
  });

  const subtotal = itemTotals.reduce((acc, item) => acc + item.total, 0);
  const vat = (subtotal * 0.07);

  const total = subtotal + vat;

  const order = await Order.create({
    userId,
    supplierId,
    dueDate,
    paymentMethod,
    paymentTerms,
    items: itemTotals,
    vat,
    total,
    notes,
    orderNumber: generateRandomString(),
  });

  return {
    status: true,
    message: `Order Created successfully`,
    data: order.toJSON(),
  };
};

export const uploadDoc = async (
  userId: string,
  orderId: string,
  documentUrl: any
) => {
  const result = await Order.findOneAndUpdate(
    { _id: orderId, userId: userId },
    { $set: { document: documentUrl } },
    { new: true }
  );

  if (!result) throw new NotFoundError(`Order not found `);

  return {
    status: true,
    message: `Document Uploaded successfully`,
    data: result,
  };
};

export const createOrderWithItems = async (
  userId: string,
  items: any[],
  data: CsvDataType
) => {
  const itemTotals = items.map((item) => {
    const total = item.price * item.quantity;
    return { ...item, total };
  });

  const subtotal = itemTotals.reduce((acc, item) => acc + item.total, 0);
  const vat = (subtotal * 0.07) / 100;
  const total = subtotal + vat;
  const order = await Order.create({
    userId,
    items: itemTotals,
    total,
    vat,
    ...data,
  });

  return {
    status: true,
    message: ` created successfully`,
    data: order.toJSON(),
  };
};
