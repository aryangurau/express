const router = require("express").Router();
const roomController = require("./room.controller");

//get data of all room
router.get("/", async (req, res, next) => {
  try {
    const result = await roomController.list();
    res.json({ data: result, msg: "list of all rooms found successfully" });
  } catch (err) {
    next(err);
  }
});

//get By room number
router.get("/:id", async (req, res, next) => {
  try {
    const result = await roomController.getById(req?.params?.id);

    res.json({ data: result, msg: "room found successfully" });
  } catch (err) {
    next(err);
  }
});

//add new room
router.post("/", async (req, res, next) => {
  try {
    const result = await roomController.create(req.body);
    res.json({ data: result, msg: "room created successfully" });
  } catch (err) {
    next(err);
  }
});

router.post("/login", () => {});

//update room details
router.put("/:id", async (req, res, next) => {
  try {
    const result = await roomController.updateById(req?.params?.id, req.body);
    res.json({ data: result, msg: "room updated successfully" });
  } catch (err) {
    next(err);
  }
});

//update status
router.patch("/:id", async (req, res, next) => {
  try {
    const result = await roomController.updateStatus(req?.params?.id);
    res.json({ data: result, msg: "room status updated successfully" });
  } catch (err) {
    next(err);
  }
});

//delete the room
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await roomController.remove(req?.params?.id);
    res.json({ data: result, msg: "room deleted successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
