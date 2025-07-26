const express = require("express");

const app = express();

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.listen(7777, () => {
    console.log("Listening to port 7777");
});