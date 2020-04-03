const shortid = require("shortid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var usersSchema = new Schema(
  {
    username: { type: String, required: true },
    _id: { type: String, default: shortid.generate }
  },
  { collection: "Users" }
);

mongoose.model("Users", usersSchema);
