const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }
}, { timestamp: true });
module.exports = mongoose.model('Product', ProductSchema);