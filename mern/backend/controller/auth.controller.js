const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const UserModel = require("../model/user.model");
const mongoClient = mongodb.MongoClient;
const mapUser = require("./../helpers/mapUser");

const connectionURL = "mongodb://localhost:27017";
const dbname = "group7db";
const passwordhash = require("password-hash");
const multer = require("multer");
const path = require("path");

// const upload = multer({
//   dest: "uploads/images/",
// });
const uploader = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads/images"));
  },
});
const upload = multer({ storage: uploader });

// console.log("file directory in auth : ", __dirname);
// console.log("root directory in auth : ", process.cwd());

//  /auth/login
router.post("/login", function (req, res, next) {
  UserModel.findOne({
    email: req.body.email,
  })
    .then(function (user) {
      if (!user) {
        return next({
          msg: "Invalid Email!!!",
          status: 404,
        });
      }
      if (user.isActivated) {
        return next({
          msg: "Please Activate Your Account/ Contact System Adminstrator",
          status: 404,
        });
      }
      if (user) {
        var isMatched = passwordhash.verify(req.body.password, user.password);
        if (!isMatched) {
          return next({
            msg: "Invalid Password!!!",
            status: 404,
          });
        }
        if (isMatched) {
          res.json({
            LoggedInUser: user,
            msg: "Logged In Sucessfully!!!",
            status: 200,
          });
        }
      }
    })
    .catch(function (err) {
      return next(err);
    });
});

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
router.post("/signup", upload.single("img"), function (req, res, next) {
  console.log("req.body: ", req.body);
  console.log("req.file: ", req.file);

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

        if(req.file){
          req.body.img = req.file.originalname
        }

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
