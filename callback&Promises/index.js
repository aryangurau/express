const goodMorning = () => {
  console.log("good morning");
};
const goodEvening = () => {
  console.log("good evening");
};

const main = ({ first, second }) => {
  const currentTime = new Date().getHours();
  if (currentTime >= 12) {
    first();
  } else {
    second();
  }
};
main({ first: goodEvening, second: goodMorning });

//callback for numbers and string together
// const calculate = (a, b, operation) => {
//   return operation(a, b);
// };

// const string1 = (string) => "hello";
// const sub = (a, b) => a - b;
// const added = calculate(3, 2, string1);
// const subtracted = calculate(3, 2, sub);
// console.log(added);
// console.log(subtracted);

// const gm = () => {
//   console.log("good morning");
// };
// const ge = () => {
//   console.log("goodevening");
// };
// const main = (function1, function2) => {
//   const date = new Date().getHours();
//   if (date <= 12) {
//     return function1();
//   } else {
//     return function2();
//   }
// };

// main(gm, ge);

//write a promise functions that sums up two number passed to promise function
const sumpromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log(2 + 2));
  }, 2000);
});
sumpromise
  .then((result) => {
    console.log(`${result}`);
  })
  .catch((err) => {
    console.log(err);
  });

//write a promise functions that sums up two number passed to promise function
const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sum = 3 + 2 + "a";
    if (isNaN(sum)) {
      reject("error while calculating");
    } else {
      resolve(sum);
    }
  }, 2000);
});
promises
  .then((result) => {
    console.log(`${result}`);
  })
  .catch((err) => {
    console.log(err);
  });
//write an async await function to get the product of 2 number
// const result = async () => {
//   const getProduct = (a, b) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(a * b);
//       }, 2000);
//     });
//   };

//   try {
//     const product = await getProduct(2, 4);
//     console.log(`the product is ${product}`);
//   } catch (err) {
//     console.log(err);
//   }
// };

// result();

//write an async await function to get the product of 2 number

const getProduct = async (a, b) => {
  return setTimeout(() => {
    return a * b;
  }, 2000);
};

const finalResult = async () => {
  const getproduct = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a * b);
      }, 2000);
    });
  };
  try {
    const product = await getproduct(2, 4);
    console.log(`the result is ,${product}`);
  } catch (err) {
    console.log(err);
  }
};
finalResult();
