import queue from "../../libs/queue"
import Order from "../../models/orders"

export default class OrderService {
    constructor() {}
    async checkout(order: Order) {
        await queue.add('EmailConfirmPayment', order)
    }
}