const express=require('express');
const path=require('path');

const app=new express();

const mongoose=require("mongoose");

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")))

app.listen(3000,()=>{
    console.log("Server Running at port 3000");
});