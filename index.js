import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import useRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import jwt from "jsonwebtoken";


const app = express();
app.use(bodyParser.json())

app.use((req,res,next)=>{
  const tokenString = req.header("Authorization")
  if(tokenString != null){
    const token = tokenString.replace("Bearer ", "")
    //console.log(token)

    jwt.verify(token,"abcd-sandaru@2000",
      (err,decoded)=>{
        if(decoded !=null){
          console.log(decoded)
          req.user = decoded
          next()
        }else{
          console.log("Invalid token")
          res.status(403).json({
            message : "Invalid token"
          })
        }
      }
    )   
  }else{
    next()
  }
  
})

mongoose.connect("mongodb+srv://sandarusamintha64_db_user:sandaru123@cluster0.szvggql.mongodb.net/shopdb?appName=Cluster0")
.then(()=>{
  console.log("Connected to the database")
}).catch(()=>{
  console.log("Database connection failed")
})

app.use("/users",useRouter)
app.use("/products",productRouter)


app.listen(3000,()=>{
  console.log("Sever is run on port 3000");
})