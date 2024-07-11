// import { MongoClient } from "mongodb"
// const URI = process.env.MONGO_URI
// const options =
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }


// let client = new MongoClient(URI, options)
// let clientPromise

// if (process.env.NODE_ENV !== 'production') {
//     if (!global._mongoClientPromise) {
//         global._mongoClientPromise = client.connect()
//     }
//     clientPromise = global._mongoClientPromise
// } else {
//     clientPromise = client.connect()
// }

// export default clientPromise


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // const Grid = require("gridfs-stream");
// import mongoose from "mongoose"
// import Grid from "gridfs-stream";
// const URI = process.env.MONGO_URI




// async function dbConnect() {
//     try {
//         const conn = mongoose.createConnection(URI)


//         // initialize grid-fs-stream
//         // let gfs;
//         // const gfsInit = conn.once('open', () => {
//         //     gfs = Grid(conn.db, mongoose.mongo);
//         //     gfs.collection('uploads');
//         //     console.log('connected to mongodb');
//         //     console.log(gfs);

//         // })


//         return {
//             getConnection: () => conn,
//         };


//     } catch (error) {
//         console.log(error);
//         console.log(' mongodb is disconnected');

//     }
// }

// export default dbConnect;


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@







// database.js

import mongoose from "mongoose";
// Function to establish a connection to MongoDB
const connectToDatabase = async (mongoURI) => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Add other options as needed
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

// Export the connectToDatabase function
export default connectToDatabase;
