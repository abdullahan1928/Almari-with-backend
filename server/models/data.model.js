const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    items: [{
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }]
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
