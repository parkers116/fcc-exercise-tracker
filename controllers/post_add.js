const mongoose = require("mongoose");
require("../models/users");
require("../models/exercises");

exports.post_add = (req, res, next) => {
  let Users = mongoose.model("Users");
  let Exercises = mongoose.model("Exercises");

  Users.findById(req.body.userId, (err, usersData) => {
    if (err) {
      return next(err);
    }
    if (usersData) {
      //handle optional input parameter date
      if (!req.body.date) {
        delete req.body.date;
      } else {
        req.body.date = new Date(req.body.date);
      }

      Exercises.create(req.body, (err, exercisesData) => {
        if (err) {
          return next(err);
        }
        res.json({
          _id: exercisesData.userId,
          description: exercisesData.description,
          duration: exercisesData.duration,
          date: exercisesData.date
        });
      });
    } else {
      return next({ status: 400, message: "userId not found" });
    }
  });
};
