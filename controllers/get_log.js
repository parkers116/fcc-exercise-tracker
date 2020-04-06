const mongoose = require('mongoose');
require('../models/users');
require('../models/exercises');

exports.get_log = (req, res, next) => {
  let Users = mongoose.model('Users');
  let Exercises = mongoose.model('Exercises');
  let exerciseQuery = {};
  let exerciseOption = {};

  Users.findOne({ _id: req.query.userId }, (err, usersData) => {
    if (err) {
      return next(err);
    }

    if (!usersData) {
      return next({ status: 400, message: 'userId not found' });
    }

    // create exerciseQuery object
    exerciseQuery.userId = req.query.userId;
    if (req.query.from || req.query.to) {
      exerciseQuery.date = {};
      if (req.query.from) {
        exerciseQuery.date['$gte'] = new Date(req.query.from);
      }
      if (req.query.to) {
        exerciseQuery.date['$lte'] = new Date(req.query.to);
      }
    }

    // create exerciseOption object
    if (req.query.limit) {
      exerciseOption.limit = parseInt(req.query.limit);
    }

    Exercises.find(exerciseQuery, null, exerciseOption)
      .sort({ date: 1 })
      .exec((err, exercisesData) => {
        if (err) {
          return next(err);
        }
        if (!exercisesData) {
          return next({
            status: 400,
            message: 'exercises not found with this userId',
          });
        }
        res.json({
          username: usersData.username,
          _id: usersData._id,
          log: exercisesData.map((item) => {
            return {
              _id: item.userId,
              description: item.description,
              duration: item.duration,
              date: item.date,
            };
          }),
          count: exercisesData.length,
        });
      });
  });
};
