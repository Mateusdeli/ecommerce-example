// import { PaymentModel } from "../../domain/models/payment";
// import PaymentRepository from "../../service/contracts/payment-repository";

// const payments: PaymentModel[] = []

// export default class PaymentInMemoryRepository implements PaymentRepository {
//   async getByTokenId(token: string): Promise<PaymentModel | undefined> {
//     return payments.find(payment => payment.tokenId === token)
//   }

//   async getAll(): Promise<PaymentModel[]> {
//    return payments
//   }

//   async save(data: PaymentModel): Promise<void> {
//     payments.push(data)
//   }
// }