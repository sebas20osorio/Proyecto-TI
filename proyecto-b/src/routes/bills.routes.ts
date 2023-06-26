import { Router } from "express";
import controllers from "../controllers/index";


const router = Router();

router.get("/gen/:ids", controllers.Bills.genBill);

export { router }