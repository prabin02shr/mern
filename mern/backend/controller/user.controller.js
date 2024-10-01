const router = require("express").Router();
const mongdb = require("mongodb");
const mongoClient = mongdb.MongoClient;
const connectionURL = "mongodb://localhost:27017";
const dbname = "group7db";

// const express = require("express");
// const router = express.Router();

router.get("/myfile", function (req, res, next) {
  require("fs").readFile("hello.txt", function (err, done) {
    if (err) {
      next(err);
    }
    res.json(done.toString());
  });
});

// /user/view
router.get("/view", function (req, res, next) {
  mongoClient
    .connect(connectionURL)
    .then(function (client) {
      var database = client.db(dbname);
      var collection = database.collection("user");
      collection
        .find()
        .toArray()
        .then(function(users){
          res.json(users)
        })
        .catch(function (err) {
          return next(err);
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

// /user/
router
  .route("/:user_id")
  .get(function (req, res, next) {
    res.json({
      msg: "get single user details",
    });
  })
  .post(function (req, res, next) {
    res.json({});
  })
  .put(function (req, res, next) {
    res.json({});
  })
  .delete(function (req, res, next) {
    res.json({});
  });

module.exports = router;
