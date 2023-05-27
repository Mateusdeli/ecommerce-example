import { Card } from "../../domain/models/card";
import ValidationCard from "../../service/contracts/validation-card";

export default class ValidationCardAdapter implements ValidationCard {
  private readonly TIME_PROCESS_IN_SECONDS = 1.5;

  async validate(card: Card): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, 1000 * this.TIME_PROCESS_IN_SECONDS)
  
      setTimeout(() => {
        reject(false);
      }, 10000);
    })
  }
}