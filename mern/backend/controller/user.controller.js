const router = require("express").Router();
const mongodb = require("mongodb");
const UserModel = require("../model/user.model");
const mongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://localhost:27017";
const dbname = "group7db";
const OId = mongodb.ObjectId;
const mapUser = require("./../helpers/mapUser");

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

// get single user
// /user/user_details/
router.get("/user_details/:user_id", function (req, res, next) {
  UserModel.find({
    _id: req.params.user_id,
  })
    .then(function (user) {
      if (!user[0]) {
        return next({
          msg: "User not found",
          status: 404,
        });
      }
      res.json(user[0]);
    })
    .catch(function (err) {
      return next(err);
    });
});

// /user/view
// get all user
router.get("/view", function (req, res, next) {
  var users = UserModel.find()
    .sort({ _id: -1 })
    // .limit(2)
    // .skip(2)
    .then(function (userList) {
      if (!userList) {
        return next({
          msg: "No users found!!!",
          status: 404,
        });
      }
      res.json(userList);
    })
    .catch(function (err) {
      return next(err);
    });

  //   mongoClient
  //     .connect(connectionURL)
  //     .then(function (client) {
  //       var database = client.db(dbname);
  //       var collection = database.collection("user");
  //       collection
  //         .find()
  //         .toArray()
  //         .then(function (users) {
  //           res.json(users);
  //         })
  //         .catch(function (err) {
  //           return next(err);
  //         });
  //     })
  //     .catch(function (err) {
  //       return next(err);
  //     });
});

// /user/
router
  .route("/:user_id")
  // .get(function (req, res, next) {
  //   res.json({
  //     msg: "get single user details",
  //   });
  // })
  // .post(function (req, res, next) {
  //   res.json({});
  // })

  .put(function (req, res, next) {
    // UserModel.findOne({
    //   _id: req.params.user_id,
    // })
    UserModel.findById(req.params.user_id)
      .then(function (user) {
        if (!user) {
          return next({
            msg: "User Not Found",
            status: 404,
          });
        }

        if (user) {
          //   if (req.body.username) {
          //     user.username = req.body.username;
          //   }
          //   if (req.body.dob) {
          //     user.dob = req.body.date_of_birth;
          //   }
          //   if (req.body.gender) {
          //     user.gender = req.body.gender;
          //   }
          //   if (!user.address) {
          //     user.address = {};
          //   }
          //   if (req.body.temporary_Address) {
          //     user.address.temporaryAddress = req.body.temporary_Address;
          //   }
          //   if (req.body.permanent_Address) {
          //     user.address.permanentAddress = req.body.permanent_Address;
          //   }

          var updateUser = mapUser(user, req.body);
          updateUser.role = req.body.role;
          updateUser
            .save()
            .then(function (updatedUser) {
              res.json({
                msg: "User Updated Sucessfully",
                status: 200,
              });
            })
            .catch(function (err) {
              return next(err);
            });
        }
        // user
        //   .save()
        //   .then(function (updatedUser) {
        //     res.json({
        //       msg: "User Updated Sucessfully!!!",
        //       updatedUser: updatedUser,
        //       status: 200,
        //     });
        //   })
        //   .catch(function (err) {
        //     return next(err);
        //   });
      })
      .catch(function (err) {
        return next(err);
      });

    // mongoClient
    //   .connect(connectionURL)
    //   .then(function (client) {
    //     var database = client.db(dbname);
    //     var collection = database.collection("user");
    //     collection
    //       .updateOne(
    //         {
    //           _id: new OId(req.params.user_id),
    //         },
    //         {
    //           $set: req.body,
    //         }
    //       )
    //       .then(function (updateUser) {
    //         res.json(updateUser);
    //       })
    //       .catch(function (err) {
    //         return next(err);
    //       });
    //   })
    //   .catch(function (err) {
    //     return err;
    //   });
  })

  .delete(function (req, res, next) {
    // mongoClient
    //   .connect(connectionURL)
    //   .then(function (client) {
    //     var database = client.db(dbname);
    //     var collection = database.collection("user");
    //     collection
    //       .deleteOne({ _id: new OId(req.params.user_id) })
    //       .then(function (deleteUser) {
    //         res.json(deleteUser);
    //       })
    //       .catch(function (err) {
    //         return next(err);
    //       });
    //   })
    //   .catch(function (err) {
    //     return next(err);
    //   });

    UserModel.findByIdAndDelete(req.params.user_id)
      .then(function (deletedUser) {
        if (!deletedUser) {
          return next({
            msg: "User Not Found!!!",
            status: 404,
          });
        }
          res.json({
            msg: "User Deleted Sucessfully!!!",
            status: 200,
          });
        
      })
      .catch(function (err) {
        return next(err);
      });
  });

module.exports = router;
