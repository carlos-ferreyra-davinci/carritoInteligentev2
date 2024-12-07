
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    marca: {
        type: String,
    },
    codigo: {
        type: String,
    },
    stock: {
        type: String,
    },
    segmento: {
        type: String,
    },
    precio: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
    },{    timestamps: true
})
export default mongoose.model('Product', ProductSchema)