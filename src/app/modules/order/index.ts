import express from "express";
import { verifyToken } from "../../middleware/auth.js";
import { Create, CreateWithCsv, UploadDoc } from "./controller.js";

const router = express.Router();

router.route("/").post(verifyToken, Create);

router.route("/upload-document").patch(verifyToken, UploadDoc);

router.route("/csv").post(verifyToken, CreateWithCsv);

export default router;
