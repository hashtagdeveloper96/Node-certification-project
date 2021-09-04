const mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});

module.exports = mongoose.model("Product", productSchema);
