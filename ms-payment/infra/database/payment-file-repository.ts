// import path from 'path'
// import { PaymentModel } from "../../domain/models/payment";
// import PaymentRepository from "../../service/contracts/payment-repository";
// import FileAdapter from "../file-adapter";

// export default class PaymentFileRepository implements PaymentRepository {

//   private payments = path.join(__dirname, './payments.json')

//   constructor(private readonly fileAdapter: FileAdapter) {}

//   async getByTokenId(token: string): Promise<PaymentModel | undefined> {
//     const results = await this.getAll()
//     return results.find(payment => payment.tokenId === token)
//   }

//   async save(data: PaymentModel): Promise<void> {
//     const results = await this.getAll()
//     await this.fileAdapter.write(this.payments, [...results, data])
//   }
  
//   async getAll(): Promise<PaymentModel[]> {
//     return await this.fileAdapter.read(this.payments)
//   }
// }