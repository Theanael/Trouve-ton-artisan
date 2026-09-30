var express = require('express');
var router = express.Router();

const categoryRoute = require('./category')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/category',categoryRoute)

module.exports = router;
