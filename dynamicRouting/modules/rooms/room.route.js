const router = require("express").Router();

//get data of all room
router.get("/", (req, res) => {
  res.json({ data: `hello from get room` });
});

//get data of single room
router.get("/:id", (req, res) => {
  res.json({ data: `hello from get single data of room` });
});

//add new room
router.post("/:id", (req, res) => {
  res.json({ data: `hello from post room` });
});

//update multiple data  of the room
router.put("/:id", (req, res) => {
  res.json({ data: `hello from put to updata multiple  room` });
});

//update single data of room
router.patch("/:id", (req, res) => {
  res.json({ data: `hello from patch update single room` });
});

//delete the room
router.delete("/:id", (req, res) => {
  res.json({ data: `hello from delete room` });
});

module.exports = router;
