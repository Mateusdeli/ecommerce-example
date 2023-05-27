import { Router } from "express"
import { adapterRoute } from "../adapters/express-route-adapter"
import { makeCreatePaymentController } from "../factories/controllers/create-payment-controller-factory"

export default (router: Router): void => {
  router.post('/payments', adapterRoute(makeCreatePaymentController()))
}