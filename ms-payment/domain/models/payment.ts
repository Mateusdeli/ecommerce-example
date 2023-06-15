import { Card } from "./card";
import { Customer } from "./customer";
import { Product } from "./product";
import { Webhook } from "./webhook";

export type Payment = {
  card: Card;
  customer: Customer;
  products: Product[];
  id?: string;
  webhook?: Webhook;
};
