const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ data: `hello from users dynamic routing practice` });
});

router.get("/:id", (req, res) => {
  res.json({ data: `hello from users get single data ` });
});

router.post("/:id", (req, res) => {
  res.json({ data: `hello from users post create new user data ` });
});

router.put("/:id", (req, res) => {
  res.json({ data: `hello from users put update multiple  data ` });
});

router.patch("/:id", (req, res) => {
  res.json({ data: `hello from users patch update single data ` });
});

router.delete("/:id", (req, res) => {
  res.json({ data: `hello from users delete data ` });
});
module.exports = router;
