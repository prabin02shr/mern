const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const UserModel = require("../model/user.model");
const mongoClient = mongodb.MongoClient;
const mapUser = require("./../helpers/mapUser");

const connectionURL = "mongodb://localhost:27017";
const dbname = "group7db";
const passwordhash= require("password-hash")

// console.log("file directory in auth : ", __dirname);
// console.log("root directory in auth : ", process.cwd());

// /auth/login
router.get("/login", function (req, res, next) {
  res.json({
    msg: "from login page",
  });
});

//  /auth/login
router.post("/login", function (req, res, next) {});

// /auth/register
router.post("/register", function (req, res, next) {
  console.log("data is: ", req.body);

  // db stuff
  mongoClient
    .connect(connectionURL)
    .then(function (client) {
      var database = client.db(dbname);
      var collection = database.collection("user");
      collection
        .insertOne(req.body)
        .then(function (newUser) {
          res.json({
            registeredUser: req.body,
            msg:
              "Hi " +
              req.body.username +
              " Your account has been created sucessfully",
          });
        })
        .catch(function (err) {
          return next(err);
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

// /auth/signup
router.post("/signup", function (req, res, next) {
  UserModel.find({
    email: req.body.email,
  })
    .then(function (user) {
      if (user[0]) {
        return next({
          msg: "Email Already Exist/ User already registered",
          status: 404,
        });
      }
      if (!user[0]) {
        const user = new UserModel();
        // user is now mongoose object

        // user.username = req.body.username;
        // user.dob = req.body.date_of_birth;
        // user.gender = req.body.gender;

        // if (user.address) {
        //   user.address = {};
        // }

        // user.address.temporaryAddress = req.body.temporary_address.split(",");
        // user.address.permanentAddress = req.body.permanent_address;

        var new_user = mapUser(user, req.body);
        if (req.body.email) {
          new_user.email = req.body.email;
        }
        if (req.body.password) {
          new_user.password = passwordhash.generate(req.body.password);
        }
        new_user
          .save()
          .then(function (newuser) {
            res.json(newuser);
          })
          .catch(function (err) {
            return next(err);
          });
      }
    })
    .catch(function (err) {
      return next(err);
    });
});

module.exports = router;
