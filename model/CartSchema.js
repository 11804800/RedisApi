const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Cart=new Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    }
},{
    timestamps:true
});

module.exports=mongoose.model("cart",Cart);