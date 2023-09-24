import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRouter from "./routers/auth.routes.js"
import userRouter from "./routers/users.routes.js"
import hotelsRouter from "./routers/hotels.routes.js"
import roomsRouter from "./routers/rooms.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app =express()
dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to db");
    } catch (error) {
        throw error 
    }
};

mongoose.connection.on("disconnacted",() =>{
console.log("mongoDB disconnected");
});


// Middle wares
app.use(cookieParser())
app.use(express.json()) 
app.use(cors()) 

app.use("/hotel/auth",authRouter);
app.use("/hotel/users",userRouter);
app.use("/hotel/hotels",hotelsRouter);
app.use("/hotel/rooms",roomsRouter);

app.use((error,req,res,next)=>{
    const errorStatus = error.status || 500
    const errorMessage = error.message || "something went wrong"
return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:error.stack
})
})

app.listen(5000, ()=>{   
 connect() 
console.log("connected to backend");
});
