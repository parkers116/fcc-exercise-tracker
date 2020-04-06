const mongoose = require("mongoose");
require("../models/users");

exports.get_users = (req, res, next) => {
  let Users = mongoose.model("Users");
  Users.find({}, (err, data) => {
    if (err) {
      console.error(err);
      res.json({ error: err });
      return;
    }
    res.json(
      data.map(item => {
        return { username: item.username, _id: item._id };
      })
    );
  });
};
