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

router.get("/", (req, res, next) => {
  try {
    res.json({ data: `hello from get user` });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
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
