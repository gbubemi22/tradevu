import { StatusCodes } from "http-status-codes";
import { Controller } from "../../utils/constant.js";
import { create, createOrderWithItems, uploadDoc } from "./service.js";
import {
  uploadFileToBlobStorage,
  uploadMultipleToBlobStorage,
} from "../../utils/azureUpload.js";
import { UploadedFile } from "express-fileupload";
import fastCsv from "fast-csv";

export const Create: Controller = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId);

    const orderData = {
      userId,
      ...req.body,
    };

    res.status(StatusCodes.CREATED).json(await create(orderData));
  } catch (error) {
    next(error);
  }
};

export const UploadDoc: Controller = async (req, res, next) => {
  try {
    if (!req.files || !req.files.document) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "No image uploaded" });
    }
    const document = req.files.document;
    const documentUrl = await uploadFileToBlobStorage(document);
    const userId = req.user.id;
    const { oderId } = req.body;

    res
      .status(StatusCodes.OK)
      .json(await uploadDoc(userId, oderId, documentUrl));
  } catch (error) {
    next(error);
  }
};

export const CreateWithCsv: Controller = async (req, res, next) => {
  try {
    if (!req.files || !req.files.file) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "No CSV file uploaded" });
    }

    const file: UploadedFile = req.files.file as UploadedFile;

    if (file.mimetype !== "text/csv") {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Unsupported file type" });
    }

    const items = await parseCsvFile(file);

    const userId = req.user.id;

    res
      .status(StatusCodes.OK)
      .json(await createOrderWithItems(userId, items, req.body));
  } catch (error) {
    next(error);
  }
};

// Function to parse CSV files
const parseCsvFile = (file: UploadedFile): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const items: any[] = [];
    fastCsv
      .parseString(file.data.toString(), { headers: true })
      .on("data", (row) => {
        items.push({
          name: row.name,
          quantity: parseInt(row.quantity),
          price: parseFloat(row.price),
        });
      })
      .on("end", () => {
        resolve(items);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};
