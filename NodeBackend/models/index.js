
const dbConfig=require('../config/db.config')

const mongoose= require('mongoose')

const db={}

db.mongoose=mongoose
db.url=dbConfig.url
db.users=require('./db.user')(mongoose)
db.admins=require('./db.admin')(mongoose)
module.exports=db
