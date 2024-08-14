// const { Schema, model } = require("mongoose");

// const userSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     phone: { type: Number, required: true },
//     password: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     roles: { type: [String], enum: ["admin", "user"], default: ["user"] },
//     isActive: { type: Boolean, required: true, default: true },
//   },
//   { timestamps: true }
// );

// const userModel = new model("User", userSchema);
// module.exports = userModel;

//database connection (schema +  model)

const { Schema, model } = require("mongoose"); //destructuring

const userSchema = new Schema(
  {
    name: { type: String, required: true }, //validation
    // password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // roles: { type: [String], enum: ["admin", "user"], default: ["user"] },
    isActive: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const userModel = new model("User", userSchema);
module.exports = userModel;
