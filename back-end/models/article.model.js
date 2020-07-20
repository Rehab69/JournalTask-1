const mongoose=require('mongoose');
const Schema= mongoose.Schema;


const articleSchema= new Schema({
    title:{
        type:String,

    },
    description:{
        type:String
    },
    articleBody:{
         type:String
        },
    userName:{
        type:Schema.Types.ObjectId,ref:'User'
    },
    approve:{
        type:Boolean
    }
});

const Article= mongoose.model('Article',articleSchema);

module.exports = Article;