const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let registerSchema = new Schema({
  
  name: {
    type: String,
    default: ""
  },
  regist_date: {
    type: Date,
    default: "",
  },
  
});

module.exports = mongoose.model("Register", registerSchema);
