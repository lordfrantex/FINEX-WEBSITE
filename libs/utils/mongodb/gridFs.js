const URI = process.env.MONGO_URI

// gridfs.js

const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

// Initialize GridFS with the existing database connection
const initializeGridFS = (connection) => {
    let gfs;

    connection.once('open', () => {
        gfs = Grid(connection.db, mongoose.mongo);
        gfs.collection('uploads');



    });
    console.log(gfs);

    return {
        getGridFS: () => gfs
    };
};

// Export the initializeGridFS function
export default initializeGridFS;
