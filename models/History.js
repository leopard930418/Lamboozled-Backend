const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let historySchema = new Schema(
{   
    register_id: {
        type: String,
        default: ""
    },  
    day_num: {
        type: Number,
        default: 0
    },
    article_index: {
        type: Number,
        default: 0,
    },
    result:{
        type: String,
        default: ""
    },
    sample:{
        type: String,
        default: "",
    }
  
});

module.exports = mongoose.model("History", historySchema);
