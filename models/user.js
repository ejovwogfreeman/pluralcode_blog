const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: ture },
  username: { type: String },
  isAdmin: { Type: Boolean },
  dateJoined: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", userSchema);
