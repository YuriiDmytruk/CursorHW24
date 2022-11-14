const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Id is required"],
    unique: [true, "Id must be unique"],
  },

  title: {
    type: String,
    required: false,
    unique: false,
  },

  imgLink: {
    type: String,
    required: false,
    unique: false,
  },

  newsText: {
    type: String,
    required: false,
    unique: false,
  },

  date: {
    type: String,
    required: false,
    unique: false,
  },
});

module.exports = mongoose.model.News || mongoose.model("News", NewsSchema);