const router = require("express").Router();

const { post_new_user } = require("../controllers/post_new_user.js");
const { post_add } = require("../controllers/post_add.js");
const { get_users } = require("../controllers/get_users.js");
const { get_log } = require("../controllers/get_log.js");

router.post("/new-user", (req, res, next) => {
  post_new_user(req, res, next);
});

router.post("/add", (req, res, next) => {
  post_add(req, res, next);
});

router.get("/users", (req, res, next) => {
  get_users(req, res, next);
});

router.get("/log", (req, res, next) => {
  get_log(req, res, next);
});

module.exports = router;
