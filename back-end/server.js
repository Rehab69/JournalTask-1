 const express= require('express');
 const cors= require('cors');
 const mongoose= require('mongoose');
 User = require("./models/user.model"); 




 require('dotenv').config();

 const app= express();
 const Port=  5001 ;

 const uri=process.env.ATLAS_URI;
 mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true },

     (err) => {
         if (err) {
             //it is for exit connection in case of error
             console.error(err)
             process.exit();
         }
         console.log("Connection successfully")
         app.listen(Port, () => {
             console.log(`app listening at http://localhost:${Port}`)
         })
     })


app.use(cors());
app.use(express.json());

 const userRouter= require('./routers/users');
 app.use('/users',userRouter);

 const articleRouter= require('./routers/articles');
 app.use('/articles',articleRouter);

