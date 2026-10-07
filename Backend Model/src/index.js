// import mongoose, { connect } from "mongoose"
// import { DB_NAME } from "./constants"
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
    path : '/.env'
})

connectDB()
.then( () =>{
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running o PORT ${process.env.PORT}`);
        
    })
})
.catch((err) =>{
    console.log("MongoDB connection failed !!" , err);
    
})





















/*
import express from "express"
(async() =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" ,  ()=>{
            console.log("Error",error);
            throw error
        })
        app.listen(process.env.PORT , () =>{
            console.log(`App is listening on PORT : ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.log("Error", error);
        throw error
    }
})()

*/