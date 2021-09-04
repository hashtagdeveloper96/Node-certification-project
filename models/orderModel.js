const mongoose = require("mongoose");

var orderSchema = mongoose.Schema({
  id: String,
  email: String,
  orders: [
    {
      id: Number,
      name: String,
      price: Number,
      description: String,
      image: String,
      qty: Number,
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
