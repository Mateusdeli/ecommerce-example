import { Router } from 'express'
import webhookController from '../controllers/index'

const router = Router()

router.post('/', webhookController.post)

export default {
    name: '/webhook',
    router
}