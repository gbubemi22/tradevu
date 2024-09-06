import mongoose from "mongoose";
import { ItemDocument, OrderDocument, PaymentDataType, PaymentStatusDataType, PaymentTermsDataType } from "./types.js";
declare const Order: mongoose.Model<OrderDocument, {}, {}, {}, mongoose.Document<unknown, {}, OrderDocument> & mongoose.Document<unknown, any, any> & {
    userId: mongoose.Schema.Types.ObjectId;
    supplierId: mongoose.Schema.Types.ObjectId;
    dueDate: string;
    paymentMethod: PaymentDataType;
    paymentTerms: PaymentTermsDataType;
    total: number;
    vat: number;
    notes: string;
    document: string;
    orderNumber: string;
    currency: string;
    items: ItemDocument[];
    payment_Status: PaymentStatusDataType;
} & Required<{
    _id: unknown;
}>, any>;
export default Order;
