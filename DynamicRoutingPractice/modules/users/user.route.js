const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    //handles the error at routing level  try{}catch(){next(err)}
    res.json({ data: `i have ${sum} number of users` }); //here sum is not defined and is handeled
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  //params
  try {
    res.json({ data: `hello from users get single data ${req?.params?.id} ` });
  } catch (err) {
    next(err);
  }
});

router.post("/:id", (req, res, next) => {
  console.log(req?.body);
  try {
    res.json({
      data: `hello from users post create new user data ${req?.body}`,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from users put update multiple  data ` });
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from users patch update single data ` });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    res.json({ data: `hello from users delete data ` });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
