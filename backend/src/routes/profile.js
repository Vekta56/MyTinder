const express = require("express");
const { userAuto } = require("../middlewares/isLogged.js");
const { validateEditProfileData } = require("../utils/validator.js");
const { validatePasswordProfileData } = require("../utils/validator.js");
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/profile/view", userAuto, async (req, res) => {
    try {
        const user = req.user;
        res.send(user);
    } catch (err) {
        res.status(400).send("Something went wrong" + err.message);
    }
});

router.patch("/profile/edit", userAuto, async (req, res) => {
    try {
        const loggedInUser = req.user;
        if (!validateEditProfileData(req)) {
            throw new Error("Invalid edit data.");
        }

        Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

        await loggedInUser.save();

        res.json({
            message: `${loggedInUser.firstName}, your profile updated successfuly`,
            data: loggedInUser,
        });
    } catch (err) {
        res.status(400).send("Something went wrong" + err.message);
    }
});

router.patch("/profile/password", userAuto, async (req, res) => {
    try {
        const user = req.user;
        const { newPassword, currentPasswordCheck } = req.body;

        validatePasswordProfileData(newPassword, currentPasswordCheck, user);
        const passwordHash = await bcrypt.hash(newPassword, 10);
        user.password = passwordHash;

        user.save();
        res.send("Changed password successfuly!")
    } catch (err) {
        res.status(400).send("Something went wrong" + err.message);
    }
});


module.exports = router;

