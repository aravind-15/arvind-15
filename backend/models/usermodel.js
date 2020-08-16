var mongoose=require('mongoose');
const { text } = require('express');

var userSchema=new mongoose.Schema({
    id:{
       type: Number,
       required:true
    },
    name: {
        type:String,
        required:true
    },
    age :Number,
    gender :text,
    mail :String,
    mobile : Number

})

module.exports = mongoose.model("user",userSchema);