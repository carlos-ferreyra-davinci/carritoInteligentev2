import mongoose, {mongo} from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    //timestamps: { 
      //  createdAt: true, 
    //    updatedAt: true 
  //  }
})

export default mongoose.model("user", userSchema)