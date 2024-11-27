import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb://locaLhost/CarroIntv2")
        console.log("la base de datos esta conectada");
    } catch (error) {
        console.log(error)
    }
}