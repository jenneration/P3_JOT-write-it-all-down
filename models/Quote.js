const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// quotesSchema
const quoteSchema = new Schema({
    quote:{
      type: String,
    },
    // each quote belongs to single user
    user:{ type:Schema.Types.ObjectId, ref :"User"}
  });
  const Quote = mongoose.model("Article", quoteSchema);
  module.exports = Quote;