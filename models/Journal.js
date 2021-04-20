const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// journal schema
const journalSchema = new Schema({
    name:{
      type: String,
      required : true
    },
   
    user:[{ type:Schema.Types.ObjectId, ref :"User"}],
    // each journal can have multiple articles so saving as an array 
    Article:[{type:Schema.Types.ObjectId, ref :"Article"}]
  });
  const Journal = mongoose.model("Journal", journalSchema);
  module.exports = Journal;