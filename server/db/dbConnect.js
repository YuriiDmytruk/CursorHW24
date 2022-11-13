const mongoose = require("mongoose");

async function dbConnect() {
  mongoose
    .connect(
      'mongodb+srv://yurii:1234@cluster0.hgtgr4s.mongodb.net/CursorHW24?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;