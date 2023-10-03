const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
});

const categories = mongoose.model("categories", categoriesSchema);

module.exports = categories;
