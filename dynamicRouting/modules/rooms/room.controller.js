const roomModel = require("./room.model");

const createRoom = async (payload) => {
  const { roomImage, ...rest } = payload;
  const result = await roomModel.create(rest);
  return result;
};
module.exports = { createRoom };
