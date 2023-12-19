const express=require("express")

const user=express()
const usercontroller=require('../controllers/usercontroller')

user.get("/register",usercontroller.getRegister)
user.post("/register",usercontroller.postUserRegister)

user.get("/login",usercontroller.getLogin)
user.post('/login',usercontroller.postUserLogin)

user.get('/homepage',usercontroller.getHome)
module.exports=user