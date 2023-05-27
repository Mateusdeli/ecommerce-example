import { HttpResponse } from "./http";

export default interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}