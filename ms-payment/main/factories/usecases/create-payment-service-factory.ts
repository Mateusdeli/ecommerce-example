// import PaymentFileRepository from "../../../infra/database/payment-file-repository"
// import FileAdapter from "../../../infra/file-adapter"
import RandomValuesAdapter from "../../../infra/random-values.adapter"
import ValidationCardAdapter from "../../../infra/validators/validation-card-adapter"
import { CreatePaymentService } from "../../../service/usecases/create-payment-service"

export const makeCreatePaymentService = (): CreatePaymentService => {
  const randomValues = new RandomValuesAdapter();
  const validationCard = new ValidationCardAdapter();
  return new CreatePaymentService(validationCard, randomValues);
}