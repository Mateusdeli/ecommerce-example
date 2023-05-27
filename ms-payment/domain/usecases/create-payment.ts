import Payment from "../models/payment";
import { Transaction } from "../models/transaction";

export interface CreatePayment {
  execute: (payment: Omit<Payment, 'id'>) => Promise<Transaction | void>
}