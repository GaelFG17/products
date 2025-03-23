const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    stock: {type: Number, required: true},
})

const Products = mongoose.model('Products', productsSchema)

module.exports = {Products}