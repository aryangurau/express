const bycrypt = require("bcryptjs");
const genHash = (text) => {
  return bycrypt.hashSync(text, Number(process.env.SALT));
};

const verifyHash = (text, hashText) => {
  return bycrypt.compareSync(text, hashText);
};
module.exports = { genHash, verifyHash };
