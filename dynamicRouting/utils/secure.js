require("dotenv").config();
const bcrypt = require("bcryptjs");
const genHash = (text) => {
  return bcrypt.hashSync(String(text), 10);
};

const verifyHash = (text, hashText) => {
  return bcrypt.compareSync(String(text), hashText);
};
console.log(genHash("aryan"));

module.exports = { genHash, verifyHash };

//checking
// const hash = genHash("Aryangurau123");
// console.log({ hash });
// const checkPw = verifyHash("Aryangurau123", hash);
// console.log({ checkPw });
