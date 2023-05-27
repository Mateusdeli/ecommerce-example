import { CreatePayment } from "../../domain/usecases/create-payment";
import Controller from "../contracts/controller";
import { HttpResponse } from "../contracts/http";
import { Validation } from "../contracts/validation";
import { badRequest } from "../helpers/http-helper";
import { ok, serverError } from "../helpers/http-helper";

type Request = {
  card: any;
  customer: any;
  products: any[];
};

export default class CreatePaymentController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly createPayment: CreatePayment
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate({ ...request });
      if (error) {
        return badRequest(error);
      }

      const result = await this.createPayment.execute({ ...request });

      return ok(result);
    } catch (error: any) {
      console.log(error);
      
      return serverError(error);
    }
  }
}
