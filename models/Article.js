const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new Schema({
    title:{
      type: String,
      required : true
    },
    body:{
      type: String,
      required : true
    },
   // each article belong to one user and one Journal so it is not an array
    user:{ type:Schema.Types.ObjectId, ref :"User"},
    journal:{type:Schema.Types.ObjectId, ref :"Journal"}
  });
  const Article = mongoose.model("Article", articleSchema);
  module.exports = Article;