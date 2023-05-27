import { Validation } from "../presentation/contracts/validation";
import MissingParamError from "../presentation/errors/missing-param-error";

export default class RequiredFieldValidation implements Validation {
  constructor(private readonly fieldName: string) {}
  validate(input: any): void | Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}