import Joi from "joi";
export declare function joiValidator(constraint: any, isMiddleware?: boolean): any;
declare const _default: {
    create: {
        body: {
            schema: Joi.ObjectSchema<any>;
        };
    };
    logIn: {
        body: {
            schema: Joi.ObjectSchema<any>;
        };
    };
    logout: {
        params: {
            schema: Joi.ObjectSchema<any>;
        };
    };
};
export default _default;
