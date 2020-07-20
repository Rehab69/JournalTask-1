const router= require('express').Router();
let Article = require('../models/article.model');

router.route('/').get((req,res)=>{
    Article.find()
    .then(articles=>res.json(articles))
    .catch(err=>res.status(400).json('Error :'+err));
});

router.route('/').post(async(req,res)=>{
    const title= req.body.title;
    const description= req.body.description;
    const articleBody= req.body.articlebody;
    const userName=req.body.username;
    const approve=req.body.approve
    

    const newArticle= new Article({
        title,
        description,
        articleBody,
        userName,
        approve
    });
   await newArticle.save()
    .then(()=>res.send("Article added"))
    .catch(err=>res.status(400).json("Error"))
})

router.route('/:id').delete((req,res)=>{
    Article.findByIdAndDelete(req.params.id).
    then(()=>res.json('article deleted')).catch(err=>res.status(400).json('Error'))

})

module.exports = router;