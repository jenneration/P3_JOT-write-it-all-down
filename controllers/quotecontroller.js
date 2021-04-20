// requiring files and model
const User = require('../models/User');
const Quote = require ("../models/Quote");

//get all the quotes
const getQuotes = (req,res)=>{
    console.log(req.params.id);
    try {
        User.findOne({_id:req.params.id}).populate("quotes")
        .then(dbQuotes=>{
            console.log(dbQuotes.quotes)
            res.json(dbQuotes.quotes);
        }) 
    } catch (error) {
        console.log(error)
     }

}
// creating quote or saving quote to database
const createQuote = (req, res)=>{
    try {
        const result = Quote.create({
            name : req.body.quote,
            user:[req.body.userId]
        })
        .then(({ _id }) => User.findOneAndUpdate({_id:req.body.userId}, { $push: { quotes: _id } }, { new: true }))
        .then()
        res.json(result);
    } catch (error) {
        console.log(error)
    }
}
// deleting the quote
const deleteQuote = (req, res)=>{
    try {
        const quote = Quote.findOne({_id:req.params.id});
        if(quote){
            console.log(quote);
            // quote have the userId to whom it belongs from there bring the user_id 
            // and go to User and pul that quote _id
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports={getQuotes, createQuote, deleteQuote};