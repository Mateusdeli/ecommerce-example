import { Validation } from "../../../../presentation/contracts/validation";
import RequiredFieldValidation from "../../../../validations/required-field-validation";
import { ValidationComposite } from "../../../../validations/validation-composite";

export const makeCreatePaymentValidation = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['card', 'customer', 'products']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}