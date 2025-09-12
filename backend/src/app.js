const express = require("express");
const connectDB = require('./config/database');
const cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

connectDB()
  .then(() => {
    console.log("База данных подключена");
    app.listen(process.env.PORT, () => {
      console.log('Сервер запущен на http://localhost:3000');
    });
  })
  .catch((err) => {
    console.log("База данных не подключена" + err);
  });

