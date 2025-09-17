const express = require("express");
const bcrypt = require("bcrypt");
const { validateSignUpData } = require('../utils/validator.js');
const User = require("../models/user");


const router = express.Router();

router.post("/signup", async (req, res) => {
  
  try {
    validateSignUpData(req);

    const {firstName, lastName, age, emailID, password, gender} = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User(
      {
        firstName,
        lastName,
        age,
        emailID,
        password: passwordHash,
      }
    );

    const savedUser = await user.save();
    const token = await savedUser.getJWT();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 8 * 3600000),
    });

    res.json({ message: "User Added successfully!", data: savedUser });
  } catch (err) {
    res.status(400).send("Ошибка регистрации: " + err.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const {emailID, password} = req.body;

    const user = await User.findOne({emailID: emailID}).exec();
    if (!user) {
      throw new Error("Incorrect password or mail!");
    }

    const isCorrectPassword = await user.validatePassword(password);

    if (isCorrectPassword) {
      const token = await user.getJWT();
      res.cookie("token", token);
      res.send(user);
    } else {
      throw new Error("Incorrect password or mail!");
    }

  } 
  catch (err) {
    res.status(404).send(err.message);
  }
});

router.post("/logout", async (req, res) => {
  res.clearCookie('token'); // очищает cookie с токеном
  res.status(200).json({ message: "Logged out successfully" });
});


module.exports = router;