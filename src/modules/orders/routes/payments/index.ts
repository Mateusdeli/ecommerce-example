import { Router } from 'express'
import orders from '../../controllers/payments/confirmed-payment.controller'

const router = Router()

router.get('/confirmed-payment', orders.get)

export default {
    name: '/orders/payments',
    router
}