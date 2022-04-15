const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String },
});

const Users = mongoose.model("User", UsersSchema);
module.exports = Users;
