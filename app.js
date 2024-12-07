const express=require('express');
const path=require('path');

const app=new express();

const mongoose=require("mongoose");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(3000,()=>{
    console.log("Server Running at port 3000");
});