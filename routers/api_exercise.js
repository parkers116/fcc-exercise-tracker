const router = require("express").Router();

router.post("/new-user", (req, res, next) => {
  res.json({ path: "/new-user" });
});

router.post("/add", (req, res, next) => {
  res.json({ path: "/add" });
});

router.get("/users", (req, res, next) => {
  res.json({ path: "/users" });
});

router.get("/log", (req, res, next) => {
  res.json({ path: "/log" });
});

module.exports = router;
