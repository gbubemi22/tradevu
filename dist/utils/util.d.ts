import mongoose from "mongoose";
declare const connectDB: (url: string) => Promise<typeof mongoose>;
declare const getOtpExpiryTime: () => Date;
export declare const validateFileType: (file: any) => boolean;
export declare const generateRandomString: (length?: number) => string;
export { getOtpExpiryTime, connectDB };
