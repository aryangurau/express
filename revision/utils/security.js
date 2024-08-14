const bcrypt = require("bcryptjs");

const genHash = (string) => {
  return bcrypt.hashSync(string, Number(process.env.SALT_ROUND));
};
const verifyHash = (string, hashedString) => {
  return bcrypt.compareSync(string, hashedString);
};
module.exports = { genHash, verifyHash };
