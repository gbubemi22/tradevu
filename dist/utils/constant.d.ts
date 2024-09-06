import { Request, Response, NextFunction } from "express";
export type Controller = (req: Request, res: Response, next: NextFunction) => Promise<any>;
export interface DefaultResponseInt {
    success: boolean;
    data?: Array<any> | Record<string, any> | any;
    message: string;
    error?: any;
    httpStatusCode?: number;
    service?: string;
}
