const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category')

router.get('/',categoryController.getAll);

router.get('/:id',categoryController.getById);

module.exports = router;
