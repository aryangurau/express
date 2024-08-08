const router = require("express").Router();

const userRouter = require("../modules/users/user.route");
const roomRouter = require("../modules/rooms/room.route.js");

router.use("/users", userRouter);
router.use("/rooms", roomRouter);
module.exports = router;
