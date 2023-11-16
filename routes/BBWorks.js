// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('BBWorks', { title: 'Search Results' });
// });

// module.exports = router;

var express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const BBWORKS_controlers= require('../controllers/BBWORKS');
var router = express.Router();
/* GET BBWORKS */
router.get('/', BBWORKS_controlers.BBWORKS_view_all_Page );
/* GET detail BBWORKS page */
router.get('/detail', BBWORKS_controlers.BBWORKS_view_one_Page);
/* GET create BBWORKS page */
router.get('/create', BBWORKS_controlers.BBWORKS_create_Page);
/* GET create update page */
router.get('/update', BBWORKS_controlers.BBWORKS_update_Page);
/* GET delete BBWORKS page */
router.get('/delete',  BBWORKS_controlers.BBWORKS_delete_Page);

module.exports = router;
