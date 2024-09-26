module.exports = function (req, res, next) {
  if (req.query.isAdmin === "prabin") {
    next();
  } else {
    next({
      msg: "Authentication fail, you don't have acecss",
    });
  }
};
