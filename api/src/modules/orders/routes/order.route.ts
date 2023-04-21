import { Router } from 'express'
import orderController from '../controllers/index'

const router = Router()

router.post('/', orderController.store)

export default {
    name: '/orders',
    router
}