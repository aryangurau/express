//business logic.... user signup ,login
const userModel = require("./user.model");
const { genHash, verifyHash } = require("../../utils/secure");
const { genToken, compareToken } = require("../../utils/token");

//for admin only
const create = async (payload) => {
  const { password, isActive, ...rest } = payload;
  rest.password = genHash(password);
  const result = await userModel.create(rest);
  return result;
};

//for user //anybody can use this register
const register = async (payload) => {
  const { password, roles, isActive, ...rest } = payload;
  rest.password = genHash(password);
  return userModel.create(rest);
};

const login = async (payload) => {
  /*steps involved in login
1. user email should exist in system or database
2. check if user is blocked or not
3. password match check
4. throw error if pasword doesn't match
5. return JWT token if password matches with user

*/
  const { email, password } = payload;
  const user = await userModel.findOne({ email, isActive: true });
  if (!user) throw new Error("user not found");
  const isValidPw = verifyHash(password, user?.password);
  console.log("Original Password:", password);
  console.log("Stored Password Hash:", user?.password);
  console.log("Is Valid Password:", isValidPw);

  if (!isValidPw) throw new Error(`Email or Password didn't match`);

  const signData = {
    name: user?.name,
    email: user?.email,
    roles: user?.roles,
  };
  return genToken(signData);
};

module.exports = { create, register, login }; //destructured and passed to user route
