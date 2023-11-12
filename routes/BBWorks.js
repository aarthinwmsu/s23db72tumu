// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('BBWorks', { title: 'Search Results' });
// });

// module.exports = router;

var express = require('express');
const BBWORKS_controlers= require('../controllers/BBWORKS');
var router = express.Router();
/* GET BBWORKS */
router.get('/', BBWORKS_controlers.BBWORKS_view_all_Page );
/* GET detail BBWORKS page */
router.get('/detail', BBWORKS_controlers.BBWORKS_view_one_Page);
module.exports = router;
