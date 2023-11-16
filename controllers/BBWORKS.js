var BBWORKS = require('../models/BBWORKS');
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
   
// // Handle BBWORKS create on POST.
// exports.BBWORKS_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: Bath & Body Works Product create POST');
// };
// Handle BBWORKS delete form on DELETE.
exports.BBWORKS_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await BBWORKS.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle BBWORKS update form on PUT.
exports.BBWORKS_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await BBWORKS.findById( req.params.id)
    // Do updates of properties
    if(req.body.PRODUCT_NAME)
    toUpdate.PRODUCT_NAME = req.body.PRODUCT_NAME;
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


   // List of all BBWORKS
   exports.BBWORKS_create_post = async function(req, res) {
       console.log("Request body:", req.body); // Log the entire request body
   
       // Check if the request body is empty or does not contain the expected fields
    //    if (!req.body || !req.body.PRODUCT_NAME || !req.body.PRODUCT_COLLECTION || !req.body.PRODUCT_PRICE) {
    //        return res.status(400).json({ error: 'Invalid request body' });
    //    }
   
       let document = new BBWORKS();
   
       // Corrected this line
       document.PRODUCT_NAME = req.body.PRODUCT_NAME;
       document.PRODUCT_COLLECTION = req.body.PRODUCT_COLLECTION;
       document.PRODUCT_PRICE = req.body.PRODUCT_PRICE;
   
       try {
           let result = await document.save();
           console.log("Saved document:", result); // Log the saved document
           res.status(201).json(result);
       } catch (err) {
           console.error('Error saving document:', err);
           res.status(500).json({ error: 'Internal Server Error' });
       }
   };
   

   exports.BBWORKS_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await BBWORKS.findById( req.query.id)
    res.render('BBWORKSdetail',{ title: 'BBWORKS Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.BBWORKS_create_Page = async function (req, res) {
    console.log("create view");
    console.log("Request body:", req.body);
    try {
        res.render('BBWORKScreate', { title: 'BBWORKS Create' });
    } catch (err) {
        console.error('Error creating BBWORKS item:', err);
        res.status(500).json({ error: err.message || 'Internal Server Error' });
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.BBWORKS_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await BBWORKS.findById(req.query.id)
    res.render('BBWORKSupdate', { title: 'BBWORKS Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a delete one view with id from query
exports.BBWORKS_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
    result = await BBWORKS.findById(req.query.id)
    res.render('BBWORKSdelete', { title: 'BBWORKS Delete', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };    