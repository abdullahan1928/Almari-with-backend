const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Categories = require('../models/categories.model'); // Make sure this path is correct
const filePath = 'D:\\Programming\\Crown Clothing\\server\\Categories.json';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected successfully");
    } catch (error) {
        console.error(`An error occurred while connecting to MongoDB: ${error}`);
    }
};

// fs.readFile(filePath, 'utf8', (err, categories) => {
//     if (err) {
//         console.error('Error reading JSON file:', err);
//         return;
//     }

//     try {
//         const jsonCategories = JSON.parse(categories);

//         // Delete all categories from the collection
//         Categories.deleteMany()
//             .then(() => {
//                 console.log('Previous categories deleted');

//                 // Save new categories to the MongoDB collection
//                 Categories.insertMany(jsonCategories)
//                     .then(() => {
//                         console.log('Categories imported successfully');
//                     })
//                     .catch((insertErr) => {
//                         console.error('Error importing categories:', insertErr);
//                     });
//             })
//             .catch((deleteErr) => {
//                 console.error('Error deleting categories:', deleteErr);
//             });
//     } catch (parseErr) {
//         console.error('Error parsing JSON:', parseErr);
//     }
// });

module.exports = connectDB;
