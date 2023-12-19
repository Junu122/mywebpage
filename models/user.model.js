const mongoose=require("mongoose")

const user=mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const User=mongoose.model("User",user)
module.exports=User;