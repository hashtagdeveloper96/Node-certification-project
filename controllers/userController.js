var User = require("../models/userModel");

module.exports.getAllUsers = (req, res, next) => {
  User.find((err, users) => {
    if (err) throw err;
    res.send(users);
  });
};

module.exports.getUserById = function (req, res, next) {
  User.findById(req.params.id, (err, user) => {
    if (err) throw err;
    res.send(user);
  });
};

module.exports.saveUser = (req, res) => {
  User.create(req.body, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.updateAddressAndCard = (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) throw err;
    if (!user) return res.status(404).send("User doesnt exist with this Id.");

    User.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (err) throw err;
      res.send(user);
    });
  });
};

module.exports.deleteUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) throw err;
    if (!user) return res.status(404).send("User doesnt exist with this Id.");
    Product.findByIdAndRemove(req.params.id, (err) => {
      if (err) throw err;
      res.redirect(user);
    });
  });
};

module.exports.editUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.status(404).send("Product doesnt exist with this Id.");
    let updateduser = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      address: req.body.address,
      card: req.body.card,
    };
    console.log(updateduser);
    User.findByIdAndUpdate(req.params.id, updateduser, (err) => {
      if (err) throw err;
      res.send(updateduser);
    });
  });
};
