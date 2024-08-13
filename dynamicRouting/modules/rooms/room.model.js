const { Schema, model } = require("mongoose");

const roomSchema = new Schema({
  roomNumber: { type: Number, required: true },
  roomType: { type: String, required: true },
  roomStatus: { type: String, required: true },
  roomPrice: { type: Number, required: true },
  //   roomCapacity: { type: Number, required: true },
  roomDescription: { type: String, required: true },
  roomImage: { type: String, default: true },
});

const roomModel = new model("Room", roomSchema);
module.exports = roomModel;
