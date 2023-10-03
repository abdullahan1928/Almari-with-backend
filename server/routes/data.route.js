const router = require('express').Router();
const {
    getAllData,
    postData,
    deleteData,
    updateData,
    getDataById
} = require('../controllers/data.controller');

router.get('/', getAllData);
router.post('/', postData);
router.delete('/:id', deleteData);
router.put('/:id', updateData);
router.get('/:id', getDataById);

module.exports = router;