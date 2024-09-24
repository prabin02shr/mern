const express = require("express");
const app = express();
const morgan = require("morgan");
const authRouter = require("./controller/auth.controller");
const userRouter = require("./controller/user.controller");
// app is now entire express framwork

const port = 8000;

// third party middleware
app.use(morgan("dev"));
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("*", function (req, res) {
  res.json({
    msg: "Page Not Found",
    status: 404,
  });
});

app.use("*", function (req, res) {
  res.json({
    msg: "Page Not Found",
    status: 404,
  });
});

app.listen(port, function (err, done) {
  if (err) {
    console.log(err);
  } else {
    console.log("server listening at port: ", port);
  }
});
