import { Request, Response } from "express";
import { CheckoutOrderDTO } from "../dtos/checkout-order.dto";
import OrderService from "../services/order.service";
import { HttpStatusCodeEnum } from "../../../enums/http-status-code.enum";

const orderService = new OrderService()

const store = async (req: Request, res: Response) => {
    try {
        const { customer, products } = req.body
        await orderService.checkout(new CheckoutOrderDTO(customer, products))
        return res.status(HttpStatusCodeEnum.CREATED).send({
            message: 'Pedido criado com sucesso!',
            data: req.body
        })
    } catch (error) {
        return res.status(HttpStatusCodeEnum.BAD_REQUEST).send(error)
    }
}

export default {
    store
}