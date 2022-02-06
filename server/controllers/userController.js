const { User } = require("../database/schemas");
const bcrypt = require("bcryptjs");
const updatePasswordController = (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (req.user.validPassword(oldPassword)) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        res.status(400).send({ err, message: "Error updating password" });
      }
      bcrypt.hash(newPassword, salt, (err, hash) => {
        if (err) {
          res.status(400).send({ err, message: "Error updating password" });
        }
        User.findByIdAndUpdate(
          { _id: req.user._id },
          { password: hash },
          (err) => {
            if (err) {
              res.status(400).send({ err, message: "Error updating password" });
            }
            res.status(200).send({ message: "Password successfully updated" });
          }
        );
      });
    });
  } else {
    res.status(400).send({ message: "Old password did not match" });
  }
};
const getUserController = (req, res) => {
  const user = (req.user && req.user.hidePassword()) || {};
  res.send({ message: "User info successfully retreived", user });
};
const updateUserController = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.user._id },
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.status(400).send({ err, message: "Error updating user" });
      }
      res
        .status(200)
        .send({
          message: "User successfully updated",
          user: user.hidePassword(),
        });
    }
  );
};

const checkUserController = (req, res) => {
  const username = req.body.username.toLowerCase();

  User.find({ username }, (err, users) => {
    if (err) {
      res.status(400).send({ message: "Check username failed", err, username });
    }
    if (users && users[0]) {
      res.send({ available: false, message: "Username exists", username });
    } else {
      res.send({ available: true, message: "Username available", username });
    }
  });
};
module.exports = {
  updatePasswordController,
  getUserController,
  updateUserController,
  checkUserController,
};
