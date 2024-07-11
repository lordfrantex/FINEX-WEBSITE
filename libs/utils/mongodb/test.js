// pages/api/upload.js

import initializeGridFS from './gridFs';
import connectToDatabase from './indexFile';

// MongoDB URI
const mongoURI = process.env.MONGO_URI


// API route handler
export default async function handler(req, res) {
    // Connect to the database
    await connectToDatabase(mongoURI);

    // Get the database connection
    const connection = mongoose.connection;

    // Initialize GridFS with the database connection
    const { getGridFS } = initializeGridFS(connection);

    // Get the GridFS stream object
    const gfs = getGridFS();

    // File upload logic using GridFS
    // Example: Use gfs.createWriteStream to upload files

    res.status(200).json({ message: 'File upload successful' });
}
