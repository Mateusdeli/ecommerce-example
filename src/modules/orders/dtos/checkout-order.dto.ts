import Product from "../models/product"
import { User } from "../../../models/user"

export class CheckoutOrderDTO {
    constructor(
        public user: User,
        public products: Product[]
    ) {}
}