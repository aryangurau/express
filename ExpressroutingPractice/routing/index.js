const router = require("express").Router();
//user CRUD
router.get("/", (req, res) => {
  res.json({ data: "hello i am receiving data from server" });
});

// router.get("/:id", (req, res) => {
//   res.json({ data: "hello i am receiving data from id" });
// });

//Dynamic routes
router.get("/:id", (req, res) => {
  //request bat data pathaune technique in database
  //1.query(?)
  //2.params(/:id)
  //3.body

  console.log(req?.params); //{id:"1"}
  console.log(req?.query); // ?name=aryan&age=24 =>{ name: 'aryan', age: '24' }
  res.json({
    data: `hello id number${req?.params?.id}  with query data ${JSON.stringify(
      req.query
    )}`,
  });
});

router.post("/", (req, res) => {
  console.log(req?.body);
  res.json({ data: "hello i am adding new data" });
});

// router.put("/", (req, res) => {
//   res.json({ data: "hello i am updating multiple field data" });
// });

// router.patch("/", (req, res) => {
//   res.json({ data: "hello hello i am updating single field data" });
// });

// router.delete("/", (req, res) => {
//   res.json({ data: "hello i am deleting data from database" });
// });

module.exports = router;
