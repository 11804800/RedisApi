const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Books=new Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String
    }
},{
    timestamps:true
});

module.exports=mongoose.model("books",Books);