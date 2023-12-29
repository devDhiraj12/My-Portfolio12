module.exports=mongoose=>{

    let schema=mongoose.Schema({

        username:String,
        password:String

    })

     const Admin=mongoose.model("Admin",schema)
    return Admin
}
