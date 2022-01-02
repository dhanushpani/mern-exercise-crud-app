const mongoose = require('mongoose');

const excerciseSChema = mongoose.Schema({
    username:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:Number,required:true},
    date:{type:Date,required:true}
},{
    timestamps:true
})

const Excercise = mongoose.model('Excercise',excerciseSChema)

module.exports = Excercise