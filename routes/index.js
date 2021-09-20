var express = require('express');
var router = express.Router();

// Librería MULTER
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
