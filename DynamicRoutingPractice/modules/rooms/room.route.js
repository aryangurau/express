const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    data: `hello from rooms get all data of room..... dynamic routing practice`,
  });
});

router.get("/:id", (req, res) => {
  res.json({ data: `hello from rooms get single data ` });
});

router.post("/:id", (req, res) => {
  res.json({ data: `hello from post rooms  create new room data ` });
});

router.put("/:id", (req, res) => {
  res.json({ data: `hello from rooms put update multiple  room data ` });
});

router.patch("/:id", (req, res) => {
  res.json({ data: `hello from rooms  patch update single data ` });
});

router.delete("/:id", (req, res) => {
  res.json({ data: `hello from rooms delete data ` });
});
module.exports = router;
