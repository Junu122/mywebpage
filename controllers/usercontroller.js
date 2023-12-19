let bcrypt=require("bcrypt")
const userData=require('../models/user.model')

exports.getRegister=async(req,res)=>{
    
    try{
       
        res.render('register')

    }catch(err){
       console.log(err)       
    }
}

exports.postUserRegister=async(req,res)=>{
    try {
        const user = {
            name: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const newUser=userData({
            fullname:user.name,
            username:user.username,
            email:user.email,
            password:hashedPassword
        })
       
        await newUser.save()
        res.redirect('/login')
        

        
    } catch (error) {
        console.log(error)
    }
}

exports.getLogin=async(req,res)=>{
    try{
        res.render("login")
    }catch(error){
        console.log(error)
    }
}


exports.postUserLogin=async(req,res)=>{
    try{
        let {username,password}=req.body;

        let existinguser=await userData.findOne({username})


        if(existinguser){
            let existingpwd=existinguser.password
           bcrypt.compare(password,existingpwd,(error,result)=>{
            if(error){
                console.log(error)
            }else{
                if(result){
                    console.log("password matches")
                    req.session.name=existinguser
                    res.redirect('/homepage')
                }else{
                    console.log("password doesnot match")
                }
            }
           })
        }else{
            console.log("user not exist")
        }
    }catch(err){
        console.log(err)
    }
}
   

exports.getHome=(req,res)=>{
    let loggedUser=req.session.name
    
    res.render("home",{loggedUser})
}