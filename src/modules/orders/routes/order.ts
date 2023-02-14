import { Router } from 'express'
import orders from '../controllers/index'

const router = Router()

router.post('/', orders.store)

export default {
    name: '/orders',
    router
}