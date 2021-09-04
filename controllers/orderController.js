var Order = require("../models/orderModel");

module.exports.getAllOrders = (req, res, next) => {
  Order.find((err, orders) => {
    if (err) throw err;
    res.send(orders);
  });
};

module.exports.getOrderById = (req, res, next) => {
  Order.find({ id: req.params.id }, (err, orders) => {
    if (err) throw err;

    res.send(orders);
  });
};

module.exports.saveOrder = (req, res) => {
  let order = new Order(req.body);
  Order.create(order, (err) => {
    if (err) throw err;
    res.send(order);
  });
};

module.exports.deleteOrder = (req, res) => {
  Order.findById(req.params.id, (err, order) => {
    if (err) throw err;
    if (!order)
      return res.status(404).send("Product doesnt exist with this Id.");
    Order.findByIdAndRemove(req.params.id, (err) => {
      if (err) throw err;
      res.send(order);
    });
  });
};
