import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async() =>{
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}` );
        
        
        app.listen(process.env.PORT , () =>{
            console.log(`App is listening on PORT : ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.log("MongoDB failed", error);
        throw error
    }
}

export default connectDB;