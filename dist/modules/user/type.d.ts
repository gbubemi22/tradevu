import mongoose from "mongoose";
export type UserDataType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: RoleType;
    phoneNumber: string;
};
export type UserDocument = mongoose.Document & {
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
};
export declare enum RoleType {
    BUYER = "BUYER",
    SUPPLIER = "SUPPLIER"
}
