const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file?.originalname.split(".")[1]);
  },
});

const upload = multer({ storage });

router.post("/register", upload.single("profilephoto"), (req, res, next) => {
  try {
    console.log({ pic: req.file });
    const URL = "http://localhost:4555/uploads/";
    const myPicture = URL + req?.file?.filename;
    res.json({ data: `user registered successfully in  url ${myPicture}` });
  } catch (err) {
    next(err);
  }
});

//RBAC (role based access control)
const checkRole = (sysRoles = []) => {
  //system lai chinne role
  return (req, res, next) => {
    try {
      const { roles: userRole = [] } = req.headers; //user role sent by user // destructured the roles from headers

      const isValidRole = sysRoles.some((role) => userRole.includes(role));
      if (!isValidRole) throw new Error("user not authorized");
      next();
    } catch (err) {
      next(err);
    }
  };
};

router.get("/", checkRole(["admin"]), (req, res, next) => {
  try {
    res.json({ data: `hello i have 2 number of users` });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkRole(["admin", "user"]), (req, res, next) => {
  try {
    res.json({ data: `hello from get id  user` });
  } catch (err) {
    next(err);
  }
});
router.post("/:id", (req, res, next) => {
  console.log(req?.body);
  try {
    res.json({ data: `hello from post  user ${JSON.stringify(req?.body)}` });
  } catch (err) {
    next(err);
  }
});
router.put("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from put  user` });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
