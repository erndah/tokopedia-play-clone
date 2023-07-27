const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
});

module.exports = mongoose.model('Product', productSchema);