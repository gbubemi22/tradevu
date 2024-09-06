import * as dotenv from "dotenv";
dotenv.config();
import { StatusCodes } from "http-status-codes";
import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import fileUpload from 'express-fileupload';
// import routes
import route from "./router/index.js";
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
if (process.env.NODE_ENV === "production") {
    app.use(helmet());
    app.use(compression());
}
app.use(mongoSanitize());
app.use(helmet());
if (process.env.NODE_ENV === "development") {
    app.use((req, res, next) => {
        console.log(`${req.method} >> ${req.get("HOST")}${req.originalUrl}`);
        if (["POST", "PUT", "PATCH"].includes(req.method))
            console.log("========Request body==========\n", req.body);
        if (["GET", "DELETE"].includes(req.method) &&
            Object.keys(req.params).length > 0)
            console.log("========Request params==========\n", req.params);
        if (req.method === "GET" && Object.keys(req.query).length > 0)
            console.log("========Request query string==========\n", req.query);
        console.log("====Auth token====\n", req.headers);
        next();
    });
}
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Tradevu  Service api",
        httpStatusCode: StatusCodes.OK,
        service: process.env.SERVICE_NAME,
    });
});
// USE ROUTES
app.use(route);
import { connectDB } from "./utils/util.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import { handleNotFound } from "./middleware/not-found.js";
app.use(handleNotFound);
app.use(errorHandlerMiddleware);
//port
const port = process.env.PORT;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`⚡️Listening on port ${port}...`);
        });
    }
    catch (error) {
        console.log("An error occurred:", error);
    }
};
start();
