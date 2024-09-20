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

app.get("/write/:filename/:content", function (request, response) {
  //   response.json({
  //     filename: request.params,
  //   });
  response.json(request.params);
});

app.listen(port, function (err, done) {
  if (err) {
    console.log(err);
  } else {
    console.log("server listening at port: ", port);
  }
});
