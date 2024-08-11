const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    const sum = sum; //sum is erro here and is handled using try catch
    res.json({
      data: `hello from rooms get all data of room..... dynamic routing practice`,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from rooms get single data ` });
  } catch (err) {
    next(err);
  }
});

router.post("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from post rooms  create new room data ` });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from rooms put update multiple  room data ` });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from rooms  patch update single data ` });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from rooms delete data ` });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
