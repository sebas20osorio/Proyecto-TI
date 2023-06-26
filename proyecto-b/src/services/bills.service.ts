import ProductoModel from "../models/producto.model";

const gen_bill = async (ids: string) => {
    const idsArrays = ids.split(",");
    let productos = [];
    let totalAmount = 0;
    for (let id of idsArrays) {
        const product = await ProductoModel.findOne({id: Number(id)});
        productos.push({name: product?.name, price: product?.price});
        totalAmount += product?.price || 0;
    }
    const response = {Products: productos, TotalAmount: totalAmount};
    return response;
}

export {
    gen_bill
}