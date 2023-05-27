import Controller from "../../../presentation/contracts/controller";
import CreatePaymentController from "../../../presentation/controllers/create-payment.controller";
import { makeCreatePaymentService } from "../usecases/create-payment-service-factory";
import { makeCreatePaymentValidation } from "./validations/create-payment-validation-controller-factory";

export const makeCreatePaymentController = (): Controller => {
  const controller = new CreatePaymentController(
    makeCreatePaymentValidation(),
    makeCreatePaymentService()
  )
  return controller
}
