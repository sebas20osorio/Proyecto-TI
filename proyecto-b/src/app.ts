import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(json());
db().then(() => console.log("Conectado a la base de datos"));
app.use(router);
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
