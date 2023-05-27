import { Card } from "../../domain/models/card";

export default interface ValidationCard {
  validate(card: Card): Promise<boolean>
}