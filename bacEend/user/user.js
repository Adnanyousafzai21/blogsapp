const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  fristname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: Number, required: true },
});

const register = new mongoose.model("register", userschema);
module.exports = register;
