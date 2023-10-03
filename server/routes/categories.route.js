const router = require('express').Router();
const {
    getCategories,
    postCategory,
    deleteCategory,
    updateCategory,
    getCategory
} = require('../controllers/categories.controller');

router.get('/', getCategories);
router.post('/', postCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);
router.get('/:id', getCategory);

module.exports = router;