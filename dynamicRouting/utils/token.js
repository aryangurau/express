const JWT = require("jsonwebtoken");

const genToken = (data) => {
  return JWT.sign(data, process.env.SECRET, {
    expiresIn: process.env.DURATION,
  });
};
const compareToken = () => {};

module.exports = { genToken, compareToken };
