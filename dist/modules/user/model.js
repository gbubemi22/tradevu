import mongoose from "mongoose";
import { RoleType } from "./type.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: false,
        unique: true,
        sparse: true,
    },
    role: {
        type: String,
        enum: Object.values(RoleType),
        required: true,
    },
    otp: {
        type: String,
        required: false,
    },
    expired_at: {
        type: Date,
        required: false,
    },
    verifiedEmail: {
        type: Boolean,
        default: false,
    },
    verifiedPhoneNumber: {
        type: Boolean,
        default: false,
    },
    lastLogin: {
        type: String,
    },
    lastLoginDevice: {
        userAgent: String,
        appVersion: String,
        platform: String,
        platformVersion: String,
        device: String,
        notificationToken: String,
        expoPushNotificationToken: String,
        devicePushNotificationToken: String,
    },
}, {
    timestamps: true,
    collection: "user",
    collation: {
        locale: "en",
        strength: 1,
        caseLevel: true,
        numericOrdering: true,
    },
});
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next();
    const salt = await bcrypt.genSalt(9);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
UserSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};
UserSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        id: this._id,
        email: this.email,
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.JWT_TOKEN_VALIDITY });
    return token;
};
const User = mongoose.model("user", UserSchema);
export default User;
