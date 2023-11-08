const mongoose = require("mongoose")
const BBWORKSSchema = mongoose.Schema({
PRODUCT_NAME: String,
PRODUCT_COLLECTION: String,
PRODUCT_PRICE: Number
})
module.exports = mongoose.model("BBWORKS", BBWORKSSchema)

