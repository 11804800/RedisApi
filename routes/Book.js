const express=require("express");
const bodyparser=require("body-parser");
const Books=require("../model/BookSchema");
const BookRouter=express.Router();

BookRouter.use(bodyparser.json());

BookRouter.get("/",async (req,res)=>{
    try
    {
        const books=await Books.find({});
        res.render("book",{
            books:books
        });
    }
    catch(err)
    {
        res.status(500).json({err:err.message});
    }
});

BookRouter.post("/",async (req,res)=>{
    try{
        const result=await Books.create({
            name:req.body.name,
            author:req.body.author,
            genre:req.body.genre
        });
        res.status(200).json({result:result});
    }
    catch(err)
    {
        res.status(500).json({err:err.message});
    }
})

module.exports=BookRouter;