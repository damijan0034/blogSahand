import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

const app=express()

dotenv.config()

//enable json files
app.use(express.json())

//DB CONNECTION
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("DB connected successfully")
}).catch((err)=>{
    console.log(err)
})

//API


app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)

//middleware for error handling
app.use((error,req,res,next)=>{
    const statusCode=error.statusCode || 500
    const message=err.message || "Internal server error"

    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})