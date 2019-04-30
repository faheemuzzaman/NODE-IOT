const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});

mongoose.model('stdtbl',studentSchema);
