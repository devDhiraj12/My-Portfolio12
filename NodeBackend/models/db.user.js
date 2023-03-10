module.exports=mongoose=>{

    let schema=mongoose.Schema({

        fullname:String,
        email:String,
        review:String,

    })

     const User=mongoose.model("User",schema)
    return User
}
