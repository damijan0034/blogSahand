import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app=express()

dotenv.config()

//DB CONNECTION
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("DB connected successfully")
}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})