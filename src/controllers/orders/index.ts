import { Request, Response } from "express";
import Order from "../../models/orders";
import OrderService from "../../services/orders/order.services";

const orderService = new OrderService()

const store = (req: Request, res: Response) => {
    const { total, user, products } = req.body
    const order = new Order(total, user)
    order.addProducts(products)
    orderService.checkout(order)
    return res.status(201).send({
        message: 'Order created.',
        data: req.body
    })
}

export default {
    store
}