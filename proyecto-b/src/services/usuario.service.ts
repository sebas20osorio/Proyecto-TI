import { usuario } from "../interfaces/usuario.interface";
import UsuarioModel from "../models/usuario.model";

const insertUsuario = async (usuario: usuario) => {
  const responseInsert = await UsuarioModel.create(usuario);
  return responseInsert;
};

const getUsuarioss = async () => {
  const responseUsuarios = await UsuarioModel.find({});
  return responseUsuarios;
};

const getusuario = async (username: string) => {
  const responseUsuarios = await UsuarioModel.findOne({
    username: username,
  });
  return responseUsuarios;
};

const updateusuario = async (username: string, data: usuario) => {
  const responseUsuarios = await UsuarioModel.findOneAndUpdate(
    { username: username },
    data,
    { new: true}
  );
  return responseUsuarios;
};

const deleteusuario = async (username: string) => {
  const responseUsuarios = await UsuarioModel.findOneAndRemove({
    username: username,
  });
  return responseUsuarios === null ? "No se encontro el usuario": "Usuario eliminado correctamente";
};

export {
  insertUsuario,
  getUsuarioss,
  getusuario,
  updateusuario,
  deleteusuario,
};
