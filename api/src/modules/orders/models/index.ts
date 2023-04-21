import Customer from "./customer";
import Product from "./product";

export default class Order {
    private products: Product[]
    constructor(
        public readonly customer: Customer) {
        this.products = []
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