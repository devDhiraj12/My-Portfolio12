const db=require("../models")
const User=db.users

exports.create=(req,res)=>{
    const user= new User({
       fullname:req.body.fullname,
        email:req.body.email,
        review:req.body.review,
    })

    //save to database
    user.save(user).then((data)=>{
        res.send(data)
    })
}

exports.userinfo=(req,res)=>{

    const obj = User.find()
    .then(data=>{
        res.send(data)
        console.log(obj)
    })
}