var BBWORKS = require('../models/BBWORKS');
// List of all BBWORKS
exports.BBWORKS_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Bath & Body Works Products list');
};
// for a specific BBWORKS.
exports.BBWORKS_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await BBWORKS.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.BBWORKS_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await BBWORKS.findById( req.params.id)
    // Do updates of properties
    if(req.body.BBWORKS_type)
    toUpdate.BBWORKS_type = req.body.BBWORKS_type;
    if(req.body.PRODUCT_PRICE) toUpdate.PRODUCT_PRICE = req.body.PRODUCT_PRICE;
    if(req.body.PRODUCT_COLLECTION) toUpdate.PRODUCT_COLLECTION = req.body.PRODUCT_COLLECTION;
    let result = await toUpdate.save();
    console.log("Success " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
   };

// List of all BBWORKS
exports.BBWORKS_list = async function(req, res) {
    try{
    theBBWORKS = await BBWORKS.find();
    res.send(theBBWORKS);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// VIEWS
// Handle a show all view
exports.BBWORKS_view_all_Page = async function(req, res) {
    try{
    theBBWORKS = await BBWORKS.find();
    res.render('BBWORKS', { title: 'BBWORKS Search Results', results: theBBWORKS });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle BBWORKS create on POST.
exports.BBWORKS_create_post = async function(req, res) {
    console.log(req.body)
    let document = new BBWORKS();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"BBWORKS_type":"goat", "cost":12, "size":"large"}
    document.PRODUCT_NAME = req.body.PRODUCT_NAME;
    document.PRODUCT_COLLECTION = req.PRODUCT_COLLECTION;
    document.PRODUCT_PRICE = req.body.PRODUCT_PRICE;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

