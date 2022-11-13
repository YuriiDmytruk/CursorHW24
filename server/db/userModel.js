const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Id is required"],
    unique: [true, "Id must be unique"],
  },

  name: {
    type: String,
    required: false,
    unique: false,
  },

  userName: {
    type: String,
    required: false,
    unique: false,
  },

  imgLink: {
    type: String,
    required: false,
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);