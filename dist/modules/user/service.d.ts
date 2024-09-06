import { RoleType, UserDataType } from "./type.js";
export declare const create: (payload: UserDataType) => Promise<{
    status: boolean;
    message: string;
    data: import("mongoose").FlattenMaps<import("mongoose").Document<unknown, any, any> & {
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
    }>>;
}>;
export declare const login: (email: string, password: string) => Promise<{
    success: boolean;
    message: string;
    data: {
        token: string;
        _id: import("mongoose").FlattenMaps<unknown>;
        __v?: any;
        $assertPopulated: <Paths = {}>(path: string | string[], values?: Partial<Paths> | undefined) => Omit<import("mongoose").Document<unknown, any, any> & {
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
        }>, keyof Paths> & Paths;
        $clearModifiedPaths: () => import("mongoose").Document<unknown, any, any> & {
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
        }>;
        $clone: () => import("mongoose").Document<unknown, any, any> & {
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
        }>;
        $createModifiedPathsSnapshot: () => import("mongoose").ModifiedPathsSnapshot;
        $getAllSubdocs: () => import("mongoose").Document[];
        $ignore: (path: string) => void;
        $isDefault: (path: string) => boolean;
        $isDeleted: (val?: boolean) => boolean;
        $getPopulatedDocs: () => import("mongoose").Document[];
        $inc: (path: string | string[], val?: number) => import("mongoose").Document<unknown, any, any> & {
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
        }>;
        $isEmpty: (path: string) => boolean;
        $isValid: (path: string) => boolean;
        $locals: import("mongoose").FlattenMaps<Record<string, unknown>>;
        $markValid: (path: string) => void;
        $model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & {
                _id: import("mongoose").Types.ObjectId;
            }, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<any, {}, {}, {}, any, any>>(): ModelType;
        };
        $op: "save" | "validate" | "remove" | null;
        $restoreModifiedPathsSnapshot: (snapshot: import("mongoose").ModifiedPathsSnapshot) => import("mongoose").Document<unknown, any, any> & {
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
        }>;
        $session: (session?: import("mongoose").ClientSession | null) => import("mongoose").ClientSession | null;
        $set: {
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, any, any> & {
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
            }>;
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, any, any> & {
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
            }>;
            (value: string | Record<string, any>): import("mongoose").Document<unknown, any, any> & {
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
            }>;
        };
        $where: import("mongoose").FlattenMaps<Record<string, unknown>>;
        baseModelName?: string | undefined;
        collection: import("mongoose").Collection;
        db: import("mongoose").FlattenMaps<import("mongoose").Connection>;
        deleteOne: (options?: import("mongoose").QueryOptions) => any;
        depopulate: (path?: string | string[]) => import("mongoose").Document<unknown, any, any> & {
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
        }>;
        directModifiedPaths: () => Array<string>;
        equals: (doc: import("mongoose").Document<unknown, any, any>) => boolean;
        errors?: import("mongoose").Error.ValidationError | undefined;
        get: {
            <T extends string | number | symbol>(path: T, type?: any, options?: any): any;
            (path: string, type?: any, options?: any): any;
        };
        getChanges: () => import("mongoose").UpdateQuery<import("mongoose").Document<unknown, any, any> & {
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
        }>>;
        id?: any;
        increment: () => import("mongoose").Document<unknown, any, any> & {
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
        }>;
        init: (obj: import("mongoose").AnyObject, opts?: import("mongoose").AnyObject) => import("mongoose").Document<unknown, any, any> & {
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
        }>;
        invalidate: {
            <T extends string | number | symbol>(path: T, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
            (path: string, errorMsg: string | NativeError, value?: any, kind?: string): NativeError | null;
        };
        isDirectModified: {
            <T extends string | number | symbol>(path: T | T[]): boolean;
            (path: string | Array<string>): boolean;
        };
        isDirectSelected: {
            <T extends string | number | symbol>(path: T): boolean;
            (path: string): boolean;
        };
        isInit: {
            <T extends string | number | symbol>(path: T): boolean;
            (path: string): boolean;
        };
        isModified: {
            <T extends string | number | symbol>(path?: T | T[] | undefined, options?: {
                ignoreAtomics?: boolean;
            } | null): boolean;
            (path?: string | Array<string>, options?: {
                ignoreAtomics?: boolean;
            } | null): boolean;
        };
        isNew: boolean;
        isSelected: {
            <T extends string | number | symbol>(path: T): boolean;
            (path: string): boolean;
        };
        markModified: {
            <T extends string | number | symbol>(path: T, scope?: any): void;
            (path: string, scope?: any): void;
        };
        model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown> & {
                _id: import("mongoose").Types.ObjectId;
            }, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<any, {}, {}, {}, any, any>>(): ModelType;
        };
        modifiedPaths: (options?: {
            includeChildren?: boolean;
        }) => Array<string>;
        overwrite: (obj: import("mongoose").AnyObject) => import("mongoose").Document<unknown, any, any> & {
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
        }>;
        $parent: () => import("mongoose").Document | undefined;
        populate: {
            <Paths = {}>(path: string | import("mongoose").PopulateOptions | (string | import("mongoose").PopulateOptions)[]): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, any, any> & {
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
            }>, Paths>>;
            <Paths = {}>(path: string, select?: string | import("mongoose").AnyObject, model?: import("mongoose").Model<any>, match?: import("mongoose").AnyObject, options?: import("mongoose").PopulateOptions): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, any, any> & {
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
            }>, Paths>>;
        };
        populated: (path: string) => any;
        replaceOne: (replacement?: import("mongoose").AnyObject, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("mongoose").Document<unknown, any, any> & {
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
        }>, {}, unknown, "find", Record<string, never>>;
        save: (options?: import("mongoose").SaveOptions) => Promise<import("mongoose").Document<unknown, any, any> & {
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
        }>>;
        schema: import("mongoose").FlattenMaps<import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: unknown;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: unknown;
        }>> & import("mongoose").FlatRecord<{
            [x: string]: unknown;
        }> & Required<{
            _id: unknown;
        }>>>;
        set: {
            <T extends string | number | symbol>(path: T, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, any, any> & {
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
            }>;
            (path: string | Record<string, any>, val: any, type: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, any, any> & {
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
            }>;
            (path: string | Record<string, any>, val: any, options?: import("mongoose").DocumentSetOptions): import("mongoose").Document<unknown, any, any> & {
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
            }>;
            (value: string | Record<string, any>): import("mongoose").Document<unknown, any, any> & {
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
            }>;
        };
        toJSON: {
            (options?: import("mongoose").ToObjectOptions & {
                flattenMaps?: true;
            }): import("mongoose").FlattenMaps<any>;
            (options: import("mongoose").ToObjectOptions & {
                flattenMaps: false;
            }): any;
            <T = any>(options?: import("mongoose").ToObjectOptions & {
                flattenMaps?: true;
            }): import("mongoose").FlattenMaps<T>;
            <T = any>(options: import("mongoose").ToObjectOptions & {
                flattenMaps: false;
            }): T;
        };
        toObject: {
            (options?: import("mongoose").ToObjectOptions): any;
            <T>(options?: import("mongoose").ToObjectOptions): import("mongoose").Require_id<T>;
        };
        unmarkModified: {
            <T extends string | number | symbol>(path: T): void;
            (path: string): void;
        };
        updateOne: (update?: import("mongoose").UpdateWithAggregationPipeline | import("mongoose").UpdateQuery<import("mongoose").Document<unknown, any, any> & {
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
        }>> | undefined, options?: import("mongoose").QueryOptions | null) => import("mongoose").Query<any, import("mongoose").Document<unknown, any, any> & {
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
        }>, {}, unknown, "find", Record<string, never>>;
        validate: {
            <T extends string | number | symbol>(pathsToValidate?: T | T[] | undefined, options?: import("mongoose").AnyObject): Promise<void>;
            (pathsToValidate?: import("mongoose").pathsToValidate, options?: import("mongoose").AnyObject): Promise<void>;
            (options: {
                pathsToSkip?: import("mongoose").pathsToSkip;
            }): Promise<void>;
        };
        validateSync: {
            (options: {
                pathsToSkip?: import("mongoose").pathsToSkip;
                [k: string]: any;
            }): import("mongoose").Error.ValidationError | null;
            <T extends string | number | symbol>(pathsToValidate?: T | T[] | undefined, options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError | null;
            (pathsToValidate?: import("mongoose").pathsToValidate, options?: import("mongoose").AnyObject): import("mongoose").Error.ValidationError | null;
        };
        firstName: string;
        lastName: string;
        otherNames?: string | undefined;
        email: string;
        password: string;
        phoneNumber: string;
        role: RoleType;
        otp: string;
        expired_at: Date;
        verifiedEmail: boolean;
        verifiedPhoneNumber: boolean;
        lastLogin: string;
        lastLoginDevice: import("mongoose").FlattenMaps<{
            userAgent: String;
            appVersion: String;
            platform: String;
            platformVersion: String;
            device: String;
            notificationToken: String;
            expoPushNotificationToken: String;
            devicePushNotificationToken: String;
        }>;
        comparePassword: (candidatePassword: string) => Promise<boolean>;
        generateJWT: () => Promise<string>;
    };
}>;
export declare const listSupplier: () => Promise<{
    status: boolean;
    message: string;
    data: (import("mongoose").Document<unknown, {}, import("./type.js").UserDocument> & import("mongoose").Document<unknown, any, any> & {
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
    }>)[];
}>;
