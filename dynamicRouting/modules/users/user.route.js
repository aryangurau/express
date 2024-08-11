//perform CRUD operation for users

const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file?.originalname.split(".")[1]);
  }, //date.extension => date.png/jpg/gif
});

const upload = multer({ storage });

router.post("/register", upload.single("profilepic"), (req, res, next) => {
  try {
    const URL = "http://localhost:5600/uploads/";
    const myPicture = URL + req?.file?.filename;
    res.json({ data: `user registered suscessfully in URL ${myPicture}` });
  } catch (err) {
    next(err);
  }
});

const verify = (req, res, next) => {
  const role = req.headers.role;
  if (role === "admin") {
    next();
  } else {
    throw new Error("you are not authorized");
  }
};
const verify2 = (req, res, next) => {
  const role1 = req.headers.role1;
  if (!role1 === "user") {
    next();
  } else {
    throw new Error("you are not user");
  }
};

//read all data
router.get("/", verify, verify2, (req, res, next) => {
  //verify,verify1 is the custom middleware that checks authorization
  //use query
  try {
    res.json({ data: `hello from get alldata users${sum}` }); //sum is not defined
  } catch (err) {
    next(err);
  }
});

//read single data
router.get("/:id", (req, res, next) => {
  console.log(req?.params?.id);
  try {
    res.json({
      data: `hello world from get single data users ${req?.params?.id}`,
    });
  } catch (err) {
    next(err);
  }
});

//add data
router.post("/", (req, res, next) => {
  //use req body
  console.log(req?.body);
  try {
    res.json({ data: `hello world from post users${req?.body}` });
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

module.exports = router;
