import { Schema, Types, model, Model } from "mongoose";

const ItemSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        nombre: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        cumpleanos: {
            type: Date,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        contrasena: {
            type: String,
            required: true
        },
        departamento: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        direccion: {
            type: String,
            required: true
        },
        complemento: {
            type: String
        },
        codigoPostal: {
            type: String
        },
        facturas: {
            type: Array
        },
        pedidos: {
            type: Array
        },
        rol: {
            type: String,
            required: true,
            enum: ["Admin", "User"],
            default: "User"
        },
        metodosDePago: {
            type: Array,
        },
        activo: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const UsuarioModel = model('usuarios', ItemSchema);
export default UsuarioModel;