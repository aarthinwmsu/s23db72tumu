var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var BBWORKS_controller = require('../controllers/BBWORKS');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// BBWORKS ROUTES ///
// POST request for creating a BBWORKS.
router.post('/BBWORKS', BBWORKS_controller.BBWORKS_create_post);
// DELETE request to delete BBWORKS.
router.delete('/BBWORKS/:id', BBWORKS_controller.BBWORKS_delete);
// PUT request to update BBWORKS.
router.put('/BBWORKS/:id', BBWORKS_controller.BBWORKS_update_put);
// GET request for one BBWORKS.
router.get('/BBWORKS/:id', BBWORKS_controller.BBWORKS_detail);
// GET request for list of all BBWORKS items.
router.get('/BBWORKS', BBWORKS_controller.BBWORKS_list);

module.exports = router;

