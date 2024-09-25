const router = require("express").Router();

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
  res.json({
    msg: "view all user",
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
