var express = require("express");
var router = express.Router();
var Order = require("../models/orderModel");
var orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrders);

router.get("/:id", orderController.getOrderById);

router.post("/save", orderController.saveOrder);

router.delete("/:id", orderController.deleteOrder);

module.exports = router;
