const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../Models/User');
const { where } = require('sequelize');


// Registration endpoint
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  User.create({ username, password })
    .then((user) => {
      res.json({ message: 'Registration successful', user });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Registration failed' });
    });
});

// Login endpoint
router.post('/login', async (req, res) => {
  // console.log(req.body);
  const user = await User.findOne({ where: { username: req.body.username, password: req.body.password } })

  if (!user) {
    res.send({ message: "user not found" });
  } else {
    res.send(user);
  }
});

// Logout endpoint
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
});

module.exports = router;
