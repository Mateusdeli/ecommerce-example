import { Router } from 'express'
import auth from '../libs/passport-local'
import authController from '../controllers/index.controller'

const router = Router()

router.post('/signup', auth.authenticate('signup', { session: false }), authController.signup)
router.post('/login', auth.authenticate('login', { session: false }),  authController.login)

export default {
    name: '/auth',
    router
}