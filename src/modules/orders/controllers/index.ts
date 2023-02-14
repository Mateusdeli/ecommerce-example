import { Request, Response } from "express";
import { CheckoutOrderDTO } from "../dtos/checkout-order.dto";
import OrderService from "../services/order.services";

const orderService = new OrderService()

const store = async (req: Request, res: Response) => {
    try {
        const { user, products } = req.body
        await orderService.checkout(new CheckoutOrderDTO(user, products))
        return res.status(201).send({
            message: 'Pedido criado com sucesso!',
            data: req.body
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default {
    store
}