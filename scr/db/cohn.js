const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/Svpm",{ useNewUrlParser: true,useUnifiedTopology: true },{

}).then(()=>{
    console.log(` mongo db conection succseful`);
}).catch((err)=>{
    console.log(err)
})