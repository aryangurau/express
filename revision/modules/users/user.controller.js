// const userModel = require("./user.model");
// const { genHash, verifyHash } = require("../../utils/security");

// const createUser = async (payload) => {
//   const { password, roles, isActive, ...rest } = payload;
//   rest.password = genHash(password);
//   const result = await userModel.createUser(rest);
//   return result;
// };

// module.exports = { createUser };

//business logic.... user signup ,login
const userModel = require("./user.model");
const { genHash, verifyHash } = require("../../utils/secure");

const create = async (payload) => {
  const { password, roles, isActive, ...rest } = payload;
  rest.password = genHash(password);
  const result = await userModel.create(rest);
  return result;
};

module.exports = { create }; //destructured and passed to user route
