import { CheckoutOrderDTO } from "../dtos/checkout-order.dto"
import { ConfirmPaymentDTO } from "../dtos/confirm-payment.dto"
import queue from "../../../libs/queue"
import Order from "../models"

export default class OrderService {
    constructor() {}

    async checkout(data: CheckoutOrderDTO) {
        const order = new Order(data.user)
        order.addProducts(data.products)
        await queue.add('GeneratePaymentJob', order)
    }

    async confirmPayment(data: ConfirmPaymentDTO) {
        await queue.add('ConfirmedPaymentJob', data)
    }
}