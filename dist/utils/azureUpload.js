import { StorageSharedKeyCredential, BlobServiceClient, } from "@azure/storage-blob";
import { v4 as uuidv4 } from "uuid";
import { BadRequestError } from "./errors.js";
import { validateFileType } from "./util.js";
export const uploadFileToBlobStorage = async (file) => {
    console.log(file);
    try {
        const maxFileSize = 70 * 1024 * 1024; // 70MB in bytes
        if (file.size > maxFileSize) {
            throw new BadRequestError("File size exceeds the maximum allowed limit (70MB).");
        }
        if (!validateFileType(file)) {
            throw new BadRequestError("Unsupported file type. Only JPEG, PNG, and GIF files are allowed.");
        }
        const accountName = process.env.AZURE_ACCT_NAME;
        const accountKey = process.env.AZURE_ACCT_KEY;
        const containerName = process.env.AZURE_CONTAINER_NAME;
        const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, new StorageSharedKeyCredential(accountName, accountKey));
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blobName = `${uuidv4()}_${Date.now()}_${file.originalname}`;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        // Set Content-Type header based on file type
        const options = {
            blobHTTPHeaders: { blobContentType: file.mimetype },
        };
        // Upload the image
        await blockBlobClient.upload(file.data, file.data.length, options);
        // Return the Blob URL
        return blockBlobClient.url;
    }
    catch (error) {
        console.error("Error uploading file to Azure Blob Storage:", error);
        throw error;
    }
};
export const uploadMultipleToBlobStorage = async (files) => {
    try {
        const accountName = process.env.AZURE_ACCT_NAME;
        const accountKey = process.env.AZURE_ACCT_KEY;
        const containerName = process.env.AZURE_CONTAINER_NAME;
        const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, new StorageSharedKeyCredential(accountName, accountKey));
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const uploadedUrls = [];
        for (const file of files) {
            const maxFileSize = 70 * 1024 * 1024; // 70MB in bytes
            if (file.size > maxFileSize) {
                throw new BadRequestError("File size exceeds the maximum allowed limit (70MB).");
            }
            if (!validateFileType(file)) {
                throw new BadRequestError("Unsupported file type. Only JPEG, PNG, and GIF files are allowed.");
            }
            const blobName = `${uuidv4()}_${Date.now()}_${file.originalname}`;
            const blockBlobClient = containerClient.getBlockBlobClient(blobName);
            // Set Content-Type header based on file type
            const options = {
                blobHTTPHeaders: { blobContentType: file.mimetype },
            };
            // Upload the file
            await blockBlobClient.upload(file.data, file.data.length, options);
            // Save the Blob URL
            uploadedUrls.push(blockBlobClient.url);
        }
        // Return an array of Blob URLs
        return uploadedUrls;
    }
    catch (error) {
        console.error("Error uploading files to Azure Blob Storage:", error);
        throw error;
    }
};
