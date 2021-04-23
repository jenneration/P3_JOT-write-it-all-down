// requiring required files
const Journal = require ('../models/Journal');
const Article = require ("../models/Article");

// get route 
const getArticle = (req, res)=>{
    console.log(req.params.id);
    try {
        Journal.findOne({_id:req.params.id}).populate("Article")
        .then(dbArticle=>{
            console.log(dbArticle)
            res.json(dbArticle);
        }) 
    } catch (error) {
        console.log(error)
     }

}
// post or creating journal
const createArticle =  (req, res)=>{
    console.log(req.body);
    if(req.body.journalId === undefined) return res.status(500).json({message:"please specify the journal you want to put"});
    try {
        const result = Article.create({
            title : req.body.title,
            body:req.body.body
        })
        .then(({ _id }) => Journal.findOneAndUpdate({_id:req.body.journalId}, { $push: { Article: _id } }, { new: true }))
        .then()
        res.json(result);
    } catch (error) {
        console.log(error)
    }
   
}
const updateArticle =  (req, res)=>{
    console.log(req.body);
   
}
const deleteArticle =  (req, res)=>{
    console.log(req.params.id);
    try {
        const result = Article.findOneAndDelete({_id:req.params.id})
        .then()
        
    } catch (error) {
        
    }
   
   
}
module.exports={getArticle, createArticle, updateArticle, deleteArticle};