const Category = require('../models/categories.model');

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.postCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
}
