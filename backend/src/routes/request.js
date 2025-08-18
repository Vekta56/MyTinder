const express = require("express");
const router = express.Router();
const { userAuto } = require("../middlewares/isLogged");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");

router.post("/request/send/:status/:toUserID", userAuto, async (req, res) => {
    try {
        const fromUserID = req.user._id;
        const status = req.params.status;
        const toUserID = req.params.toUserID;

        const toUser = await User.findById(toUserID);
        
        if(!toUser) {
            return res.status(400).json({
                message: "User does not exist"
            })
        }

        if (fromUserID.equals(toUserID)) {
            throw new Error("User cannot send connetion to himself.")
        }


        const allowedStatus = ["ignored", "interested"];

        if(!allowedStatus.includes(status)) {
            throw new Error("Invalid status.");
        }

        const isThereThisConnection = await ConnectionRequest.findOne(
            {
                $or: [
                    {fromUserID, toUserID},
                    {fromUserID: toUserID, toUserID: fromUserID},
                ],
            }
        )
        if (isThereThisConnection) {
            throw new Error("This connection already exist.");
        }
        

        const connectionRequest = new ConnectionRequest({
                fromUserID,
                toUserID,
                status
            });

        let message = "";

        if (status === "interested") {
            message = `${fromUserID} is interesred to ${toUserID}`;
        } else {
            message = `${fromUserID} is ignored ${toUserID}`;
        }


        const data = await connectionRequest.save();
        res.json({
            message: message
        })
    } catch (err) {
        res.status(400).send("Something went wrong... " + err.message);
    }
    

});

router.post("/request/review/:status/:requestID", userAuto, async (req, res) => {
    try {
        const fromUserID = req.user;
        const status = req.params.status;
        const requestID = req.params.requestID;

        const allowedStatus = ["accepted", "rejected"];

        if (!allowedStatus.includes(status)) {
            return res.status(400).json({message: "Invalid status!"});
        }

        const existingRequestID = await ConnectionRequest.findOne({
            _id: requestID,
            toUserID: fromUserID._id,
            status: "interested",
        });

        if(!existingRequestID) {
            return res.status(400).json({message: "This connection does not exist!"});
        }

        existingRequestID.status = status;

        const data = await existingRequestID.save();

        res.json({message: "Connection request " + status, data});
        } catch (err) {
            res.status(400).send("Something went wrong... " + err.message);
        }
    
});

module.exports = router;