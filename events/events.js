const { EventEmitter } = require("events");
const event = new EventEmitter();

//example one
// const myFunction = () => {
//   setTimeout(() => {
//     console.log("hello world");
//   }, 2000);
// };
// event.addListener("chat", myFunction); //create
// event.on("chat", () => {
//   console.log("someone is typing...");
// });
// event.emit("chat"); //fire

const product = {
  name: "tshirt",
  price: 100,
  shippingRate: 10,
};

const calcTotal = (item) => {
  const total = item?.price + (item?.shippingRate / 100) * item?.price;
  console.log({ total });
};
event.on("addToCart", () => {
  console.log("calculating total amount....");
});
event.addListener("addToCart", (product) => calcTotal(product));

event.emit("addToCart", product);

// event => create(addListener), Listener(on), fire(emit)
