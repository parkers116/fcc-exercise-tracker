const mongoose = require("mongoose");
require("../models/users");
require("../models/exercises");

exports.get_log = (req, res, next) => {
  let Users = mongoose.model("Users");
  let Exercises = mongoose.model("Exercises");

  Users.findOne({ _id: req.query.userId }, (err, usersData) => {
    if (err) {
      return next(err);
    }

    if (!data) {
      return next({ status: 400, message: "userId not found" });
    }

    Exercises.find({ userId: req.query.userId })
      .sort({ date: 1 })
      .exec((err, exercisesData) => {
        if (err) {
          return next(err);
        }
        if (!exercisesData) {
          return next({
            status: 400,
            message: "exercises not found with this userId"
          });
        }
        res.json({
          log: exercisesData.map(item => {
            return {
              _id: item.userId,
              description: item.description,
              duration: item.duration,
              date: item.date
            };
          }),
          count: exercisesData.length
        });
      });
  });
};
