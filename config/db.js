const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB connected");
  } catch (err) {
    console.log("Error connecting to mongoDB; ", err);
  }
};

module.exports = connectDB;
