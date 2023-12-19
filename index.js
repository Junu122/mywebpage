const express=require("express")
const app=express()
const connectDB=require('./config/database')
const register=require("./route/user")
let path=require('path');
let session=require('express-session');





app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")
app.set("views","./views")

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')))
app.use(session({secret:'my-secret-key',resave:false,saveUninitialized:false}))

connectDB()

app.use('/',register)

app.listen("8000",()=>{
console.log("on port 8000")
process.exit(1)
})