import Customer from "./customer";
import Product from "./product";

enum OrderStatusEnum {
    RECEIVED = 1,
    APPROVED = 2,
    FINISHED = 3
}

export default class Order {
    private products: Product[]
    public status: OrderStatusEnum
    constructor(
        public readonly customer: Customer
    ) {
        this.products = []
        this.status = OrderStatusEnum.RECEIVED
    }
    getProducts() {
        return this.products
    }
    addProduct(product: Product) {
        this.products.push(product)
    }
    addProducts(products: Product[]) {
        if (products.length > 0) {
            this.products = this.products.concat(products)
        }
    }
}