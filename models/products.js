const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    product_name: String,
    galaxy: String,
    product_desc: String,
    base_price: Number,
    img: String
})

module.exports = mongoose.model('Products', ProductsSchema);