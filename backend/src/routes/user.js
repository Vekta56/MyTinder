const express = require("express");
const router =  express.Router();
const { userAuto } = require("../middlewares/isLogged");
const connectionRequest = require("../models/connectionRequest");
const User = require("../models/user");
const ALLOWED_DATA = ["firstName", "lastName", "profilePicture", "age", "about", "skills"];

router.get("/user/requests/received", userAuto, async (req, res) => {
    try {
        const userID = req.user._id;

        const userRequests = await connectionRequest.find({
            toUserID: userID,
            status: "interested",
        }).populate("fromUserID", ALLOWED_DATA);


        if (!userRequests) {
            res.status(400).json({
                message: "Requests not found",
            });
        }
        res.json({
            message: "Data fetched successfully",
            data: userRequests,
        });

    } catch (err) {
        res.status(400).json({
            message: "Something went wrong... " + err.message,
        });
    }
});

router.get("/user/connections", userAuto, async (req, res) => {
    try {
        const user = req.user;

        const allConnections = await connectionRequest.find({
            $or: [
                {fromUserID: user._id},
                {toUserID: user._id}
            ],
        }).populate("fromUserID", ALLOWED_DATA).populate("toUserID", ALLOWED_DATA);

        const data = allConnections.map((row) => {
            if (row.fromUserID.equals(user._id)) {
                return row.toUserID;
            }
            return row.fromUserID;
        });

        res.json({
            message: "All connections:",
            data: data,
        })
    } catch (err) {
        res.status(400).json({
            message: `Something went wrond... ${err.message}`,
        })
    }
});

router.get("/user/feed", userAuto, async (req, res) => {
    try {
        const user = req.user;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const allConnections = await connectionRequest.find({
            $or: [
                {fromUserID: user._id},
                {toUserID: user._id},
            ]
        }).select("fromUserID toUserID");

        const hideUsersFromFeed = new Set();

        allConnections.forEach((req) => {
            hideUsersFromFeed.add(req.fromUserID.toString());
            hideUsersFromFeed.add(req.toUserID.toString());
        });

        const users = await User.find({
            $and: [
                {_id: { $nin: Array.from(hideUsersFromFeed)}},
                {_id: { $ne: user._id}},
            ]
        }).select(ALLOWED_DATA);

        res.send(users);
    } catch (err) {
        res.status(400).send("Something went wrong... " + message.err);
    }
});

module.exports = router;