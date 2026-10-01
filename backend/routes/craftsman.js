const express = require('express');
const router = express.Router();

const craftsmanController = require('../controllers/craftsman')

router.get('/top',craftsmanController.getTop);

router.get('/:id',craftsmanController.getById);

router.get('/category/:idCategory',craftsmanController.getByCategory)

module.exports = router;
