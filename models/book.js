const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const bookSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: String, required: true },
//   synopsis: String,
//   date: { type: Date,
//   default: Date.now 
//   }
// });

// const Book = mongoose.model("Book", bookSchema);

// module.exports = Book;
// userSchema
const userSchema = new Schema({
  first:{
    type: String,
    required : true
  },
  last:{type:String, required:true},
  email:{type:String, required:true},
  DOB: {type:Date, required:true},
  DarkTheme: {type :Boolean, default: false},
  journals:[{ type:Schema.Types.ObjectId, ref :"Journal"}],
  quotes :[{type:Schema.Types.ObjectId, ref: "Quote"}]
});
const User = mongoose.model("User", userSchema);

// journal schema
const journalSchema = new Schema({
  name:{
    type: String,
    required : true
  },
 
  user:{ type:Schema.Types.ObjectId, ref :"User"},
  // each journal can have multiple articles so saving as an array 
  articles:[{type:Schema.Types.ObjectId, ref :"Artilce"}]
});
const Journal = mongoose.model("Journal", journalSchema);

// Articleschema
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
// quotesSchema
const quoteSchema = new Schema({
  quote:{
    type: String,
  },
  // each quote belongs to single user
  user:{ type:Schema.Types.ObjectId, ref :"User"}
});
const Quote = mongoose.model("Article", quoteSchema);

