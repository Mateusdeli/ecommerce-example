import { CheckoutOrderDTO } from "../dtos/checkout-order.dto"
import queue from "../../../libs/queue"
import Order from "../models"

export default class OrderService {
    constructor() {}

    async checkout(data: CheckoutOrderDTO) {
        const order = new Order(data.customer)
        order.addProducts(data.products)
        await queue.add('GeneratePaymentJob', order)
    }
}