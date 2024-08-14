const router = require("express").Router();
const userController = require("./user.controller");

//RBAC ( Role Based Access Control)
const checkRole = (sysRoles = []) => {
  return (req, res, next) => {
    try {
      const { roles = [] } = req?.headers;
      const isValidRole = sysRoles.some((role) => roles.includes(role));
      if (!isValidRole) throw new Error("user not authorized");

      next();
    } catch (err) {
      next(err);
    }
  };
};

//get all data
router.get("/", checkRole(["admin"]), (req, res, next) => {
  try {
    res.json({ data: `hello from get` });
  } catch (err) {
    next(err);
  }
});
//get single data
router.get("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from get single data` });
  } catch (err) {
    next(err);
  }
});
//create new data
router.post("/", async (req, res, next) => {
  //use req body

  try {
    const result = await userController.create(req?.body);
    res.json({ data: result, msg: "user created successfully" });
  } catch (err) {
    next(err);
  }
});
//update data
router.put("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from put to update data` });
  } catch (err) {
    next(err);
  }
});
//patch to update single data
router.patch("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from patch to update single data` });
  } catch (err) {
    next(err);
  }
});
//delete data
router.delete("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from delete ` });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
