const mongoose=require('mongoose');

mongoose
    .connect('mongodb://localhost/Proyecto',{
        useUnifiedTopology:true,
        useNewUrlParser:true,
        //useFindAndModify:false
    })
    .then((db)=>console.log('DB is connected'))
    .catch((err)=>console.error(err));
