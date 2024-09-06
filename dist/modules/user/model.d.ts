import mongoose from "mongoose";
import { RoleType, UserDocument } from "./type.js";
declare const User: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument> & mongoose.Document<unknown, any, any> & {
    firstName: string;
    lastName: string;
    otherNames?: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: RoleType;
    otp: string;
    expired_at: Date;
    verifiedEmail: boolean;
    verifiedPhoneNumber: boolean;
    lastLogin: string;
    lastLoginDevice: {
        userAgent: String;
        appVersion: String;
        platform: String;
        platformVersion: String;
        device: String;
        notificationToken: String;
        expoPushNotificationToken: String;
        devicePushNotificationToken: String;
    };
    comparePassword(candidatePassword: string): Promise<boolean>;
    generateJWT(): Promise<string>;
} & Required<{
    _id: unknown;
}>, any>;
export default User;
