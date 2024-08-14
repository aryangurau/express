//perform CRUD operation for users

const router = require("express").Router();
const multer = require("multer");
const userController = require("./user.controller");

//RBAC (role based access control)
/*
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
*/

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file?.originalname.split(".")[1]);
  }, //date.extension => date.png/jpg/gif
});

const upload = multer({ storage });

router.post(
  "/register",
  upload.single("profilepic"),
  async (req, res, next) => {
    try {
      const URL = "http://localhost:5600/uploads/";
      const image = URL + req?.file?.filename;
      if (req?.file?.filename) {
        req.body.image = image;
      }
      const result = await userController.register(req.body);
      res.json({ data: result, msg: "User registered successfully" });
    } catch (err) {
      next(err);
    }
  }
);

router.post("/login", async (req, res, next) => {
  try {
    const result = await userController.login(req.body);
    res.json({ data: result, msg: "user logged in successfully" });
  } catch (err) {
    next(err);
  }
});

/*

// const verify = (req, res, next) => {
//   const role = req.headers.role;
//   if (role === "admin") {
//     next();
//   } else {
//     throw new Error("you are not authorized");
//   }
// };

router.get("/", checkRole(["admin"]), (req, res, next) => {
  try {
    res.json({
      data: `hello world from get all data only admin access ${req?.params?.id}`,
    });
  } catch (err) {
    next(err);
  }
});

//read single data
router.get("/:id", checkRole(["admin", "user"]), (req, res, next) => {
  try {
    res.json({
      data: `hellofrom get id, both admin and user access${req?.params?.id}`,
    });
  } catch (err) {
    next(err);
  }
});

//create
router.post("/", async (req, res, next) => {
  //use req body

  try {
    const result = await userController.create(req?.body);
    res.json({ data: result, msg: "user created successfully" });
  } catch (err) {
    next(err);
  }
});

//update multiple field data
router.put("/:id", (req, res, next) => {
  //use params +body
  try {
    res.json({ data: `hello world from put users ` });
  } catch (err) {
    next(err);
  }
});

//update single data
router.patch("/:id", (req, res, next) => {
  //use params +body
  try {
    res.json({ data: `hello world from patch users ` });
  } catch (err) {
    next(err);
  }
});

//delete data
router.delete("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello world from delete users ` });
  } catch (err) {
    next(err);
  }
});


*/
module.exports = router;
