import { CsvDataType, OrderDataType } from "./types.js";
import mongoose from "mongoose";
export declare const create: (payload: OrderDataType) => Promise<{
    status: boolean;
    message: string;
    data: mongoose.FlattenMaps<mongoose.Document<unknown, any, any> & {
        userId: mongoose.Schema.Types.ObjectId;
        supplierId: mongoose.Schema.Types.ObjectId;
        dueDate: string;
        paymentMethod: import("./types.js").PaymentDataType;
        paymentTerms: import("./types.js").PaymentTermsDataType;
        total: number;
        vat: number;
        notes: string;
        document: string;
        orderNumber: string;
        currency: string;
        items: import("./types.js").ItemDocument[];
        payment_Status: import("./types.js").PaymentStatusDataType;
    } & Required<{
        _id: unknown;
    }>>;
}>;
export declare const uploadDoc: (userId: string, orderId: string, documentUrl: any) => Promise<{
    status: boolean;
    message: string;
    data: mongoose.Document<unknown, {}, import("./types.js").OrderDocument> & mongoose.Document<unknown, any, any> & {
        userId: mongoose.Schema.Types.ObjectId;
        supplierId: mongoose.Schema.Types.ObjectId;
        dueDate: string;
        paymentMethod: import("./types.js").PaymentDataType;
        paymentTerms: import("./types.js").PaymentTermsDataType;
        total: number;
        vat: number;
        notes: string;
        document: string;
        orderNumber: string;
        currency: string;
        items: import("./types.js").ItemDocument[];
        payment_Status: import("./types.js").PaymentStatusDataType;
    } & Required<{
        _id: unknown;
    }>;
}>;
export declare const createOrderWithItems: (userId: string, items: any[], data: CsvDataType) => Promise<{
    status: boolean;
    message: string;
    data: mongoose.FlattenMaps<mongoose.Document<unknown, any, any> & {
        userId: mongoose.Schema.Types.ObjectId;
        supplierId: mongoose.Schema.Types.ObjectId;
        dueDate: string;
        paymentMethod: import("./types.js").PaymentDataType;
        paymentTerms: import("./types.js").PaymentTermsDataType;
        total: number;
        vat: number;
        notes: string;
        document: string;
        orderNumber: string;
        currency: string;
        items: import("./types.js").ItemDocument[];
        payment_Status: import("./types.js").PaymentStatusDataType;
    } & Required<{
        _id: unknown;
    }>>;
}>;
