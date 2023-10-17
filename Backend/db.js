const mongoose = require("mongoose");
const colors = require("colors");
const env = require('dotenv');
env.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://arpitsingh73073:9ZMEFfu6x0ajQgob@cluster0.vogvvd2.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.red.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;