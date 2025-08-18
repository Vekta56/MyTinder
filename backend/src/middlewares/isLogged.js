const jwt = require("jsonwebtoken");
const User = require("../models/user");


const userAuto = async (req, res, next) => {
    try {
        const cookies = req.cookies;

        const { token } = cookies;
        if (!token) {
            return res.status(401).send("Please Login!");
        }

        const decodedMessage = await jwt.verify(token, process.env.JWT_SECRET);

        const { _id } = decodedMessage;

        const user = await User.findById(_id);

        if(!user) {
            throw new Error("User is not found!");
        }

        req.user = user;

        next();
    } catch (err) {
        res.status(400).send("Something went wrong... " + err.message);
    }
};

module.exports = {userAuto};