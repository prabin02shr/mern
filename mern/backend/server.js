const http = require("http");
const fileop = require("./fileop");
/*
server
client-server architecture/ communication

client program
server program

protocol
-smpt
-ftp
-mqtt
-udp
-tcp
-http

in web
http(hyper text transfer protocol)
http verbs/method => GET, POST, DELETE, PUT, PATCH
http status
200 => success
300 => warning
400 => application error
500 => server error

*/

// program
// set of instruction
var server = http.createServer(function (request, response) {
  //   console.log("welcome to node js server");
  console.log("request method is: ", request.method);
  console.log("request url is: ", request.url);
  console.log("request url is: ", request.url.split("/"));
  //   regardless of any method and url this call is excuted
  //   response.end("welcome to node js server");
  //   response.end("welcome to node js server again");

  //   any method
  // url most be  "/login"
  if (request.url === "/login") {
    response.end("hi from login page");

    // any method
    // url most be "/register"
  } else if (request.url === "/register") {
    response.end("hi from register page");
  } else if (request.url === "/write") {
    // file write
    // var filename= request.url.split("/")[2]
    // var content = request.url.split("/")[3]
    // fileop 
    //   .mywrite(filename, content)
    //   .then(function (done) {
    //     response.end(done);
    //   })
    //   .catch(function (err) {
    //     response.end(err);
    //   });
  } else if (request.url === "/read") {
    response.end("file read");
  } else if (request.url === "/rename") {
    response.end("file renamed");
  } else if (request.url === "/delete") {
    response.end("file deleted");
  } else {
    // response.end("page not found");
    var filename= request.url.split("/")[2]
    var content = request.url.split("/")[3]
    fileop
      .mywrite(filename, content)
      .then(function (done) {
        response.end(done);
      })
      .catch(function (err) {
        response.end(err);
      });
  }
});

// process
server.listen(8000, "localhost", function (err, done) {
  if (err) {
    console.log(err);
  } else {
    console.log("server listening at port 8000");
  }
});




// framework
// sail js
// hapi
// express

// MERN
// mongodb
// express
// react
// node