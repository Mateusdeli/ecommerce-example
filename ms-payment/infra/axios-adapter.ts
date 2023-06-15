import axios from "axios";

export default class AxiosAdapter {
  async post<T>(url: string, data: T) {
    const response = await axios.post(url, data)
    return response.data
  }
}