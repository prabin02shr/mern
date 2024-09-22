const express = require("express");
const app = express();
const filewrite = require("./fileop");
// app is now entire express framwork

const port = 8000;

// handler for get method and empty url
app.get("/", function (request, response) {
  response.end("hompage");
});

// handler for get method and contact url
app.get("/contact", function (request, response) {
  response.end("contactpage");
});

// handler for get method and Login url
app.get("/login", function (request, response) {
  response.json({
    name: "user",
    adress: "vedu",
    msg: "login sucessfully",
    status: "400",
  });

  // method for response
  /*
    end()
    send()
    json()
    download()
    render()
    sendFile()
    */
});

app.get("/user/update/:id", function (req, res) {
  // res.json({
  //   msg: "from user update",
  //   user_id: req.params.id,
  //   // queryData: req.query.hello,
  //   username: req.query.username,
  //   password: req.query.password,
  // });

var reg_username ="prabin"
var reg_password = "1234"
});

app.get("/write/:filename/:content", function (request, response) {
  //   response.json({
  //     filename: request.params,
  //   });
  response.json(request.params);
});

// app.get("*", function (req, res) {
//   res.json({
//     msg: "Page not found",
//     status: 404,
//   });
// });

// regardless of any method and any url
app.use(function (req, res) {
  res.json({
    msg: "Page not found",
  });
});

app.listen(port, function (err, done) {
  if (err) {
    console.log(err);
  } else {
    console.log("server listening at port: ", port);
  }
});

// middleware
/*
function(res, res){}

app.use(middleware)

app.use(funtion(req, res){})
*/
