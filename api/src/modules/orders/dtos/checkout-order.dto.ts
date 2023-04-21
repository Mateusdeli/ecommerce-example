import Product from "../models/product"
import Customer from "../models/customer"

export class CheckoutOrderDTO {
    constructor(
        public customer: Customer,
        public products: Product[]
    ) {}
}