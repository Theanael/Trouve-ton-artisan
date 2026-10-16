var express = require('express');
var router = express.Router();

const categoryRoute = require('./category');
const craftsmanRoute = require('./craftsman');

router.use('/category',categoryRoute)
router.use('/craftsman',craftsmanRoute)

module.exports = router;
