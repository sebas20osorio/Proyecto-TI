import { Router } from "express";
import controllers from "../controllers/index";

const router = Router();

router.get("/", controllers.Usuarios.getUsuarios);
router.get("/:username", controllers.Usuarios.getUsuario);
router.post("/", controllers.Usuarios.postUsuario);
router.put("/:username", controllers.Usuarios.updateUsuario);
router.delete("/:username", controllers.Usuarios.deleteUsuario);

export { router };
