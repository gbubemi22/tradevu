import mongoose from "mongoose";

export type ItemDocument = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type OrderDocument = mongoose.Document & {
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
};


export type OrderDataType = {
     userId: string;
     supplierId: string;
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
   };

export type CsvDataType = {
  supplierId: mongoose.Schema.Types.ObjectId;
  dueDate: string;
  paymentMethod: PaymentDataType;
  paymentTerms: PaymentTermsDataType;
  //total: number;
  //vat: number;
  notes: string;
  document: string;
  orderNumber: string;
  currency: string;
 // items: ItemDocument[];
  payment_Status: PaymentStatusDataType;
};

export enum PaymentDataType {
  AUTOMATIC_DEBIT = "AUTOMATIC_DEBIT",
  MANUAL_PAYMENT = "MANUAL_PAYMENT",
}

export enum PaymentTermsDataType {
  SPLITTING_PAYMENT = "SPLITTING_PAYMENT",
  FULL_PAYMENT = "FULL_PAYMENT",
}

export enum PaymentStatusDataType {
  PAID = "PAID",
  PENDING = "PENDING",
}
