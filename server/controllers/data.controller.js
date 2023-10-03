const Data = require("../models/data.model");

exports.getAllData = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.postData = async (req, res) => {
    try {
        const data = await Data.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteData = async (req, res) => {
    try {
        const data = await Data.findByIdAndDelete(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updateData = async (req, res) => {
    try {
        const data = await Data.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getDataById = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}