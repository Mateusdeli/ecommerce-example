import { Router } from 'express'
import orders from '../../controllers/orders'

const router = Router()

router.post('/orders', orders.store)

export default router