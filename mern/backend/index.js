const express = require("express");
const app = express();
const morgan = require("morgan");
const authRouter = require("./controller/auth.controller");
const userRouter = require("./controller/user.controller");
const path = require("path");
const isAdmin = require("./middleware/isAdmin")

// console.log("file directory: ", __dirname);
// console.log("root directory: ", process.cwd());

// app is now entire express framwork

const port = 8000;

// third party middleware
app.use(morgan("dev"));

// json
// parser for application/json
// app.use(express.json());

// parser for x-www-form-urlencoded
app.use(express.urlencoded({
  extended:true
}))

// inbuilt middleware
// file
// internal serve
app.use(express.static("uploads"));

app.use("/file", express.static(path.join(process.cwd() + "/uploads")));

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("*", function (req, res, next) {
  next({
    msg: "Page Not Found",
    status: 404,
  });
});

app.use("*", function (req, res, next) {
  next({
    msg: "Page Not Found",
    status: 404,
  });
});

app.use(function (req, res, next) {
  next({
    msg: "from first middleware",
  });
});

// error handling middlware
app.use(function (err, req, res, next) {
  res.json({
    msg: err.msg || err,
  });
});

//
app.listen(port, function (err, done) {
  if (err) {
    console.log(err);
  } else {
    console.log("server listening at port: ", port);
  }
});
