const express = require("express");
const cors=require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/User.routes");
const jwt = require("jsonwebtoken");
// const { userProfile } = require("./model/userProfile");
// const { userProfileRouter } = require("./routes/User.profile");
const app = express();
app.use(express.json());
app.use(cors())
app.use("/users", userRouter);
app.get("/", (req, res) => {
    res.send("welcome Home page");
  });
// app.use("/profile",userProfileRouter)
app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log("Not coonect to db");
    console.log(error);
  }
  console.log("Server listening on 8080");
});