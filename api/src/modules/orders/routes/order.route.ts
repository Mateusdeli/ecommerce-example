import { Router } from 'express'
import orderController from '../controllers/index'
import auth from '../../auth/libs/passport'

const router = Router()

router.post('/', auth.authenticate('jwt', { session: false }), orderController.store)

export default {
    name: '/orders',
    router
}