var express = require("express");
var router = express.Router();
var Admin = require("../models/adminModel");
var AdminController = require("../controllers/AdminController");

router.get("/", AdminController.getAllUsers);

router.get("/:id", AdminController.getUserById);

router.post("/save", AdminController.saveUser);
router.patch("/:id", AdminController.updateAddressAndCard);

router.put("/:id", AdminController.editUser);

module.exports = router;
