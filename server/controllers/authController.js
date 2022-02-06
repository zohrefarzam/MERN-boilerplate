const { User } = require("../database/schemas");
const passport = require('passport');
const registerController =(req, res) => {
  const {
    body: { password, username },
  } = req;
  if (!req || !req.body || !username || !password) {
    res.status(400).send({ message: "Username and Password required" });
  }
  req.body.username_case = req.body.username;
  req.body.username = req.body.username.toLowerCase();
  const newUser = User(req.body);

  User.find({ username }, (err, users) => {
    if (err) {
      res.status(400).send({ message: "Create user failed", err });
    }
    if (users[0]) {
      res.status(400).send({ message: "Username exists" });
    }

    newUser.hashPassword().then(() => {
      newUser.save((err, savedUser) => {
        if (err || !savedUser) {
          res.status(400).send({ message: "Create user failed", err });
        } else {
          res.send({
            message: "User created successfully",
            user: savedUser.hidePassword(),
          });
        }
      });
    });
  });
};

const loginController = (req, res, next) => {
    req.body.username = req.body.username.toLowerCase();
  
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(401).send(info);
      }
  
      req.login(user, err => {
        if (err) {
          res.status(401).send({ message: 'Login failed', err });
        }
        res.send({ message: 'Logged in successfully', user: user.hidePassword() });
      });
  
    })(req, res, next);
  }
const logoutController= (req, res) => {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send({ message: 'Logout failed', err });
      }
      req.sessionID = null;
      req.logout();
      res.send({ message: 'Logged out successfully' });
    });
  }
module.exports = {
  registerController,
  loginController,
  logoutController
};
