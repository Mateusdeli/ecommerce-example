import { Payment } from "../../domain/models/payment";
import { Product } from "../../domain/models/product";
import { Transaction } from "../../domain/models/transaction";
import { CreatePayment } from "../../domain/usecases/create-payment";
import RandomValues from "../contracts/random-values";
import ValidationCard from "../contracts/validation-card";

export class CreatePaymentService implements CreatePayment {
  private readonly MIN_VALUE = 10000000000;
  private readonly MAX_VALUE = 99999999999;

  constructor(
    private validationCard: ValidationCard,
    private randomValues: RandomValues
  ) {}

  async execute({ card, customer, products }: Omit<Payment, "id">): Promise<Transaction | void> {
    const isCardValid = await this.validationCard.validate(card);

    if (!isCardValid) {
      return;
    }

    const randomId = this.randomValues.number(this.MIN_VALUE, this.MAX_VALUE);
    const transaction: Transaction = {
      id: String(randomId),
      total: this.getPriceProducts(products),
      createdAt: new Date(),
      customer,
    };

    return transaction;
  }

  private getPriceProducts(products: Product[]): number {
    return products.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
  }
}