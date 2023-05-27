import RandomValues from "../service/contracts/random-values";

export default class RandomValuesAdapter implements RandomValues {
  number(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}