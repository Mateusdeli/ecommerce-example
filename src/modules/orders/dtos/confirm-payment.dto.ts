export class ConfirmPaymentDTO {
    constructor(
        public payerId: string,
        public paymentId: string
    ) {}
}