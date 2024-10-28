const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const UserModel = require("../model/user.model");
const mongoClient = mongodb.MongoClient;
const mapUser = require("./../helpers/mapUser");

const connectionURL = "mongodb://localhost:27017";
const dbname = "group7db";
const passwordhash = require("password-hash");
const upload = require("./../middleware/upload");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// console.log("file directory in auth : ", __dirname);
// console.log("root directory in auth : ", process.cwd());

function createToken(user) {
  let token;
  token = jwt.sign(
    {
      username: user.username,
      email: user.email,
      role: user.role,
      _id: user._id,
    },
    process.env.SECRET_KEY
  );
  return token;
}

//  /auth/login
router.post("/login", function (req, res, next) {
  
  UserModel.findOne({
    email: req.body.email
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
          var token = createToken(user);
          res.json({
            token: token,
            msg: "Logged In Sucessfully!!!",
            status: 200,
            LoggedInUser: user,
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
router.post("/signup", upload.array("img"), function (req, res, next) {
  // single file upload
  // router.post("/signup", upload.single("img"), function (req, res, next) {
  
  console.log("req.file: ", req.files);
  if (req.fileTypeError) {
    return next({
      msg: "Invalid file format!!!",
      status: 404,
    });
  }

  UserModel.find({
    email: req.body.email,
  })
    .then(function (user) {
      if (user[0]) {
        console.log("req.body if useralreadyexist: ", req.body);
        return next({
          msg: "Email Already Exist/ User already registered",
          status: 404,
        });
      }
      if (!user[0]) {
        console.log("req.body if user notfound: ", req.body);

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

        // if (req.file) {
        //   var fileType = req.file.mimetype.split("/")[0]; //image
        //   if (fileType === "image") {
        //     req.body.img = req.file.originalname;
        //   }
        // }

        // for single fie upload
        if (req.file && req.file != null) {
          // var fileType = req.file.mimetype.split("/")[0]; //image
          // if (fileType !== "image") {
          //   // file remove

          //   return next({
          //     msg: "Invalid File Format!!!",
          //     status: 404,
          //   });
          // }
          req.body.img = req.file.originalname;
        }

        // for multipel files upload
        if (req.files && req.files.length > 0) {
          req.body.img = req.files.map(function (item, index) {
            return item.originalname;
          });
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
