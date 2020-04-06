const mongoose = require("mongoose");
require("../models/users");

exports.post_new_user = (req, res, next) => {
  let Users = mongoose.model("Users");
  Users.create({ username: req.body.username }, (err, data) => {
    if (err) {
      if (err.code == 11000) {
        return next({ status: 400, message: "username is already taken" });
      }
      return next(err);
    }
    res.json({ username: data.username, _id: data._id });
  });
};
