// const mongoose = require("mongoose")
import mongoose from "mongoose"

// deprecation warning
mongoose.set("strictQuery",true)

const connectDb = () =>{
        mongoose.connect(process.env.MONGO_URL,{
        dbName:"payments"
    }).then((c) => {
        console.log(`database connected ${c.connection.host}`)
    }).catch((e) => console.log(e))
}


export default connectDb