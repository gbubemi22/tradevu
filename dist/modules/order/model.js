import mongoose from "mongoose";
import { PaymentDataType, PaymentStatusDataType, PaymentTermsDataType, } from "./types.js";
const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
});
const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    items: {
        type: [ItemSchema],
        required: true,
    },
    dueDate: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: Object.values(PaymentDataType),
    },
    paymentTerms: {
        type: String,
        enum: Object.values(PaymentTermsDataType),
    },
    orderNumber: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    currency: {
        type: String,
        default: "NGN",
    },
    vat: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    payment_Status: {
        type: String,
        enum: Object.values(PaymentStatusDataType),
        default: PaymentStatusDataType.PENDING,
    },
    document: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
    collection: "order",
    collation: {
        locale: "en",
        strength: 1,
        caseLevel: true,
        numericOrdering: true,
    },
});
const Order = mongoose.model("order", OrderSchema);
export default Order;
