// import PaymentFileRepository from "../../../infra/database/payment-file-repository"
// import FileAdapter from "../../../infra/file-adapter"
import AxiosAdapter from "../../../infra/axios-adapter";
import CronAdapter from "../../../infra/cron-adapter";
import RandomValuesAdapter from "../../../infra/random-values.adapter"
import ValidationCardAdapter from "../../../infra/validators/validation-card-adapter"
import WebhookAdapter from "../../../infra/webhook-adapter";
import { CreatePaymentService } from "../../../service/usecases/create-payment-service"

export const makeCreatePaymentService = (): CreatePaymentService => {
  const randomValues = new RandomValuesAdapter();
  const validationCard = new ValidationCardAdapter();
  const webhook = new WebhookAdapter(new AxiosAdapter(), new CronAdapter());
  return new CreatePaymentService(validationCard, randomValues, webhook);
}