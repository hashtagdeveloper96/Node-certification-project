var Admin = require("../models/adminModel");

module.exports.getAllUsers = (req, res, next) => {
  Admin.find((err, admins) => {
    if (err) throw err;
    res.send(admins);
  });
};

module.exports.getUserById = function (req, res, next) {
  Admin.findById(req.params.id, (err, admin) => {
    if (err) throw err;
    res.send(admin);
  });
};

module.exports.saveUser = (req, res) => {
  Admin.create(req.body, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports.updateAddressAndCard = (req, res) => {
  var id = req.params.id;
  Admin.findById(id, (err, admin) => {
    if (err) throw err;
    if (!admin) return res.status(404).send("User doesnt exist with this Id.");

    Admin.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (err) throw err;
      res.send(admin);
    });
  });
};

module.exports.editUser = (req, res) => {
  Admin.findById(req.params.id, (err, admin) => {
    if (err) throw err;
    if (!admin) return res.status(404).send("Admin doesnt exist with this Id.");

    let updateduser = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      address: req.body.address,
      card: req.body.card,
    };

    Admin.findByIdAndUpdate(req.params.id, updateduser, (err) => {
      if (err) throw err;
      res.send(updateduser);
    });
  });
};
