const mongoose = require("mongoose");
const config = require("./db.config");

mongoose
  .connect(config.connectionURL + "/" + config.dbname)
  .then(function (done) {
    console.log("database connected sucessfully!!!")
  })
  .catch(function (err) {
    console.log("error is ", err)
  });
