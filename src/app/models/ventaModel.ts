import { Producto } from "./productoModel";

export interface Venta{
    id: number;
    nroventa: number;
    nombre: string;
    pedido: Producto[];
}