import axios from 'axios'
import api from '../configs/api'

const instance = axios.create({
    baseURL: `http://${api.host}:${api.port}`,
})

const post = async <T>(endpoint: string, data: any) => {
    const response = await instance.post<T>(endpoint, data)
    return response.data
}

export default {
    instance,
    post
}