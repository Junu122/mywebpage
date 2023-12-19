const mongoose=require("mongoose")

const connectDB=async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/mysampledata')
    .then(()=>{
        console.log("database connection success of registerdatabase")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDB