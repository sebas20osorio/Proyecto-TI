import { Schema, Types, model, Model } from "mongoose";

const ProductoSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        marca: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: Array,
            required: true
        },
        categoria: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const ProductoModel = model('productos', ProductoSchema);
export default ProductoModel;