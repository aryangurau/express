const router = require("express").Router();
//user CRUD
router.get("/", (req, res) => {
  res.json({ data: "hello i am receiving data from server" });
});
router.post("/", (req, res) => {
  res.json({ data: "hello i am adding new data" });
});
router.put("/", (req, res) => {
  res.json({ data: "hello i am updating multiple field data" });
});

router.patch("/", (req, res) => {
  res.json({ data: "hello hello i am updating single field data" });
});

router.delete("/", (req, res) => {
  res.json({ data: "hello i am deleting data from database" });
});

module.exports = router;
