const Model = require("./room.model");

//CRUD
const create = async (payload) => {
  return Model.create(payload);
};

//Read
//1. list(admin)
const list = async () => {
  return Model.find();
};
//2. Get by room number
const getById = async (roomNo) => {
  const room = await Model.findOne({ number: roomNo });
  if (!room) throw new Error("Room not found!");
  return Model.findOne({ number: roomNo });
};

//update(POST,PATCH,PUT)

//1. update room details
const updateById = async (roomNo, payload) => {
  return await Model.updateOne({ number: roomNo }, payload, {
    runValidators: true,
  });
}; //must send payload

//2. update status of room
const updateStatus = async (roomNo, payload) => {
  const room = await Model.findOne({ number: roomNo });
  if (!room) throw new Error("Room not found!");
  const { isFilled } = room; //true
  return Model.updateOne({ number: roomNo }, { isFilled: !isFilled }); //isFilled= false
};

//Delete
const remove = async (roomNo) => {
  return Model.deleteOne({ number: roomNo });
};

module.exports = { create, list, getById, updateById, updateStatus, remove };
