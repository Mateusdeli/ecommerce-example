import { Router } from 'express'
import auth from '../libs/passport'
import authController from '../controllers/index.controller'

const router = Router()

router.post('/signup', auth.authenticate('signup', { session: false }), authController.signup)
router.post('/signin', auth.authenticate('signin', { session: false }),  authController.signin)

export default {
    name: '/auth',
    router
}