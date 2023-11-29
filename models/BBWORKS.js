const mongoose = require("mongoose")
const BBWORKSSchema = mongoose.Schema({
PRODUCT_NAME: {type: String, required: true, minLength: 5},
PRODUCT_COLLECTION: {type: String, required: true},
PRODUCT_PRICE: {type: Number, required: true, min: 5, max: 100}
})
module.exports = mongoose.model("BBWORKS", BBWORKSSchema)