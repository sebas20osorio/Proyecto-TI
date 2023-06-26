import { producto } from "../interfaces/producto.interface";
import ProductoModel from "../models/producto.model";

const insert_producto = async (producto: producto) => {
  let ultimoId = await ProductoModel.find().sort({'id': -1}).limit(1);
  producto.id = ultimoId[0].id + 1;
  const responseInsert = await ProductoModel.create(producto);
  return responseInsert? {msg: 'Producto creado correctamente'}: {msg: responseInsert};
};

const get_productos = async () => {
  const responseProductos = await ProductoModel.find({});
  return responseProductos;
};

const get_producto = async (id: string) => {
  const responseProductos = await ProductoModel.findOne({
    id: Number(id),
  });
  return responseProductos ? {msg: responseProductos} : {msg: 'No encontrado'};
};

const update_producto = async (id: string, data: producto) => {
  const responseProductos = await ProductoModel.findOneAndUpdate(
    { id: id },
    data,
    { new: true }
  );
  return responseProductos ? {msg: 'Producto actualizado correctamente'} : {msg: responseProductos};
};

const delete_producto = async (id: string) => {
  const responseProductos = await ProductoModel.findOneAndRemove({
    id: id,
  });
  return responseProductos ? {msg: "Producto eliminado correctamente"} : {msg: responseProductos};
};

const get_random_productos = async (
  cant: number = 10,
  ids_ya_solicitados: number[] = [],
  marca: string = "",
  categoria: string = ""
) => {
  let matchConditions = [];

  if (marca !== "") {
    matchConditions.push({ marca: marca });
  }
  if (categoria !== "") {
    matchConditions.push({ categoria: categoria });
  }
  matchConditions.push({ _id: { $nin: ids_ya_solicitados } });
  const responseProductos = await ProductoModel.aggregate([
    { $match: { $and: matchConditions } },
    { $sample: { size: cant } },
  ]);
  return responseProductos;
};

const get_marcas = async (cant: number = 0) => {
  let responseProductos;
  if (cant !== 0)
    responseProductos = await ProductoModel.aggregate([
      { $group: { _id: "$marca" } },
      { $limit: cant },
      { $project: { _id: 0, marca: "$_id" } }
    ]);
  else responseProductos = await ProductoModel.distinct("marca");
  return responseProductos;
};

const get_categorias = async () => {
  const responseProductos = await ProductoModel.distinct("categoria");
  return responseProductos;
};

export {
  insert_producto,
  get_productos,
  get_producto,
  update_producto,
  delete_producto,
  get_random_productos,
  get_marcas,
  get_categorias,
};
