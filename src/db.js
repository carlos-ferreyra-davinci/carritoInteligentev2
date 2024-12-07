import mongoose from "mongoose"

export const connectDB = async () =>{

    try{
        await mongoose.connect("mongodb+srv://charly24:t4t3r0@carroint2024v1.6b4bu.mongodb.net/?retryWrites=true&w=majority&appName=CarroInt2024v1")
        console.log("la base de datos esta conectada");
    } catch (error) {
        console.log(error)
    }
}


