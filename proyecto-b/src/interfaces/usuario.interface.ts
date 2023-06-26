import { auth } from "./auth.interface";
import { factura } from "./factura.interface";
import { pedido } from "./pedido.interface";

export interface usuario extends auth{
  facturas: factura[];
  pedidos: pedido[];
  rol: string;
}
