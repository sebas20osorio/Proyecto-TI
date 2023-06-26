import { Request, Response, query } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertUsuario,
  getUsuarioss,
  getusuario,
  updateusuario,
  deleteusuario,
} from "../services/usuario.service";

export const getUsuario = async ({ params }: Request, res: Response) => {
  try {
    const response = await getusuario(params.username);
    const data = response ? response : {msg: "NOT_FOUND"};
    res.status(200).send(data);
  } catch (e) {
    handleHttp(res, `ERROR_GET_USUARIO=${e}`);
  }
};

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const response = await getUsuarioss();
    res.status(200).send(response);
  } catch (e) {
    handleHttp(res, `ERROR_GET_USUARIOS=${e}`);
  }
};

export const updateUsuario = async ({ body, params }: Request, res: Response) => {
  try {
    const response = await updateusuario(params.username, body);
    res.status(200).send(response);
  } catch (e) {
    handleHttp(res, `ERROR_UPDATE_USUARIO=${e}`);
  }
};

export const postUsuario = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertUsuario(body);
    res.send(response);
  } catch (e) {
    handleHttp(res, `ERROR_POST_USUARIO=${e}`);
  }
};

export const deleteUsuario = async ({ params }: Request, res: Response) => {
  try {
    const response = await deleteusuario(params.username);
    res.status(200).json({msg: response});
  } catch (e) {
    handleHttp(res, `ERROR_DELETE_USUARIO=${e}`);
  }
};
