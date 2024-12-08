const express=require("express");
const bodyparser=require("body-parser");
const Cart=require("../model/CartSchema");
const CartRouter=express.Router();

CartRouter.use(bodyparser.json());


CartRouter.get("/",(req,res)=>{
    res.render("cart");
});

module.exports=CartRouter;