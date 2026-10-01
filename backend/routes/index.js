var express = require('express');
var router = express.Router();

const categoryRoute = require('./category');
const craftsmanRoute = require('./craftsman');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/category',categoryRoute)
router.use('/craftsman',craftsmanRoute)

module.exports = router;
