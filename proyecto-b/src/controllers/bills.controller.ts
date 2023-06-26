import { Request, Response } from "express"
import { gen_bill } from "../services/bills.service"

export const genBill = async ({ params }: Request, res: Response) => {
    try{
        const ids = params.ids;
        const response = await gen_bill(ids);
        res.status(200).json({ msg: response });
    }
    catch(e) {console.log(e)}
}