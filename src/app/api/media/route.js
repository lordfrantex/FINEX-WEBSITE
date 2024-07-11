// import dbConnect from "libs/utils/mongodb";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';
import path from "path";
import Grid from "gridfs-stream";
import mongoose from "mongoose";

import initializeGridFS from "libs/utils/mongodb/gridFs";
import connectToDatabase from "libs/utils/mongodb/indexFile";

// MongoDB URI
const mongoURI = process.env.MONGO_URI

export const config = {
    api: {
        bodyParser: false,
    },
};

export const GET = async (req, res) => {

    // Connect to the database
    await connectToDatabase(mongoURI);

    // Get the database connection
    const connection = mongoose.connection;

    // Initialize GridFS with the database connection
    const { getGridFS } = initializeGridFS(connection);

    // Get the GridFS stream object
    const gfs = getGridFS();
    // console.log("route gfs is", gfs);

    // File upload logic using GridFS
    // Example: Use gfs.createWriteStream to upload files

    return NextResponse.json({ "name": "Finex Health" })
}



export const POST = async (req) => {
    console.log(req);
    try {

        const body = await req.json();
        const data = await req.formData();


        // Create storage engine
        // const storage = new GridFsStorage({
        //     url: URI,
        //     file: (req, file) => {
        //         return new Promise((resolve, reject) => {
        //             crypto.randomBytes(16, (err, buf) => {
        //                 if (err) {
        //                     return reject(err);
        //                 }
        //                 const filename = buf.toString('hex') + path.extname(file.originalname);
        //                 const fileInfo = {
        //                     filename: filename,
        //                     bucketName: 'uploads'
        //                 };
        //                 resolve(fileInfo);
        //             });
        //         });
        //     }
        // });
        // const upload = multer({ storage });

        return NextResponse.json({ "name": "Finex Health" })
    } catch {
        return NextResponse.json({ "error": "error msg" })

    }
}
