import mongoose from "mongoose";
import { v1 as uuidV1, v4 as uuidV4, validate as UUIDValidation } from "uuid";
import mime from "mime-types";

const connectDB = (url: string) => {
  mongoose.set("strictQuery", false);

  return mongoose.connect(url);
};

const getOtpExpiryTime = () => {
  const expiredAtDate = new Date(new Date().getTime() + 1000 * 60 * 10); // 10 minutes
  return expiredAtDate;
};

export const validateFileType = (file: any): boolean => {
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "application/pdf",
  ];
  const fileMimeType = mime.lookup(file.originalname);

  fileMimeType && allowedMimeTypes.includes(fileMimeType);

  return true;
};

export const generateRandomString = (length: number = 8): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  }
  return result;
};

export { getOtpExpiryTime, connectDB };
