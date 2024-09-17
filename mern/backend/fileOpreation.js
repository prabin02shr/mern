const filewrite = require("./fileop");

// filewrite
//   .mywrite("random.txt", "calling file write module from another file")
//   .then(function (done) {
//     console.log("sucess in file write from another file", done);
//   })
//   .catch(function (err) {
//     console.log("error in file write", err);
//   });

filewrite
  .readFile("demo.txt")
  .then(function (done) {
    console.log("file content is:", done);
    // console.log("file content is:", done.toString());
  })
  .catch(function (err) {
    console.log("error is:", err);
  });
