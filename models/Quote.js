const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// quotesSchema
const quoteSchema = new Schema({
    name:{
      type: String,
    },
    // each quote belongs to single user
    user:[{ type:Schema.Types.ObjectId, ref :"User"}]
  });
  const Quote = mongoose.model("Quote", quoteSchema);
  module.exports = Quote;