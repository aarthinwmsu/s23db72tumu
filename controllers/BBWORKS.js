var BBWORKS = require('../models/BBWORKS');
// List of all BBWORKS
exports.BBWORKS_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Bath & Body Works Products list');
};
// for a specific BBWORKS.
exports.BBWORKS_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Bath & Body Works Products list: ' + req.params.id);
};
// Handle BBWORKS create on POST.
exports.BBWORKS_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Bath & Body Works Product create POST');
};
// Handle BBWORKS delete form on DELETE.
exports.BBWORKS_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Bath & Body Works Product delete DELETE ' + req.params.id);
};
// Handle BBWORKS update form on PUT.
exports.BBWORKS_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Bath & Body Works Product update PUT' + req.params.id);
};

