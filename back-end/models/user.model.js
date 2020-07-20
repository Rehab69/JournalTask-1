const mongoose=require('mongoose');
const Schema= mongoose.Schema;


const userSchema= new Schema({
   name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    articles:{type:Schema.Types.ObjectId, ref:'Article'}
    
});

const User= mongoose.model('User',userSchema);

module.exports = User;