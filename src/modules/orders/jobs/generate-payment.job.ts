import { Job, JobsOptions } from "bullmq"
import paypal from "../../../libs/paypal"
import queue from "../../../libs/queue"
import Product from "../models/product"

const options: JobsOptions = {}

const paymentPayload = (data: any) => ({
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/orders/payments/confirmed-payment",
        "cancel_url": "https://www.google.com.br"
    },
    "transactions": [{
        "item_list": {
            "items": data.products.map((product: Product) => ({
                "name": product.name,
                "sku": "item",
                "price": String(product.amount.toFixed(2)),
                "currency": "BRL",
                "quantity": String(product.quantity)
            }))
        },
        "amount": {
            "currency": "BRL",
            "total": String(calculateTotal(data).toFixed(2))
        },
        "description": "Compra dos produtos de nossa loja."
    }]
})

function calculateTotal(data: any) {
    const { products } = data
    const total = products.reduce((previousValue: number, currentValue: Product) => {
        return previousValue + (currentValue.amount * currentValue.quantity)
    }, 0)
    return total
}

export default {
    name: 'GeneratePaymentJob',
    options,
    async handle(job: Job) {
        const order = job.data
        paypal.createPayment({
            data: paymentPayload(order),
            callbackResponse: async (payment) => {
                if (payment.links) {
                    await queue.add('RequestPaymentJob', {
                        payment_id: payment.id,
                        payment_link: payment.links[1].href, 
                        ...order
                    })
                }
            }
        })  
    }
}