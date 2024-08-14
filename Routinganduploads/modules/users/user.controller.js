const userModel = require("./user.model");
const { genHash, verifyHash } = require("../../utils/secure");

//for admin
const create = async (payload) => {
  const { password, isActive, ...rest } = payload;
  rest.password = genHash(password);
  const result = await userModel.create(rest);
  return result;
};

//for user //anybody can register
const register = async (payload) => {
  const { password, roles, isActive, ...rest } = payload;
  rest.password = genHash(password);
  const result = await userModel.create(rest);
  return result;
};

const login = async () => {};

module.exports = { create }; //destructured and passed to user route
