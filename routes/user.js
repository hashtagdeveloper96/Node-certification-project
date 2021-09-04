var express = require("express");
var router = express.Router();
var User = require("../models/userModel");
var userController = require("../controllers/userController");
var passport = require("passport");

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.post("/save", userController.saveUser);
router.patch("/:id", userController.updateAddressAndCard);

router.delete("/:id", userController.deleteUser);

router.put("/:id", userController.editUser);

module.exports = router;
