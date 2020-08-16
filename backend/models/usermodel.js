var mongoose=require('mongoose');
const { text } = require('express');

var userSchema=new mongoose.Schema({
    rollno:{
       type: Number,
       required:true
    },
    name: {
        type:String,
        required:true
    },
    age :Number,
    mobile : Number

})

module.exports = mongoose.model("user",userSchema);