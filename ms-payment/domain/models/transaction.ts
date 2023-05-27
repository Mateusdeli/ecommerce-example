import { Customer } from "./customer";

export type Transaction = {
  id: string;
  total: number;
  createdAt: Date;
  customer: Customer
};
