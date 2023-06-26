import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const ruta = fileName.split(".")[0];
  const file = fileName.split(".")[0] + "." + fileName.split(".")[1];
  return [ruta, file];
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName[0] !== "index") {
    import (`./${cleanName[1]}`).then((moduleRouter) => {
        console.log(`Se esta cargando la ruta..... /${cleanName[0]}`)
        router.use(`/${cleanName[0]}`, moduleRouter.router)
    })
    
  }
});

export { router };
