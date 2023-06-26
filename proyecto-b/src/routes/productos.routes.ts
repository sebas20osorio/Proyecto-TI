import { Router, Request, Response } from "express";
import controllers from "../controllers/index";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", controllers.Productos.getProductos);
router.get("/marcas", controllers.Productos.getMarcas);
router.get("/categorias", controllers.Productos.getCategorias);
router.get("/r", controllers.Productos.getRandomProductos);
router.post("/r", controllers.Productos.getRandomProductos);
router.get("/:id", logMiddleware, controllers.Productos.getProducto);
router.post("/", controllers.Productos.postProducto);
router.put("/:id", controllers.Productos.updateProducto);
router.delete("/:id", controllers.Productos.deleteProducto);

export { router };
