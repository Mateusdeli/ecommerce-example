import http from "../../../libs/http"

interface LoginProps {
    email: string
    password: string
}

interface LoginResponseProps {
    message: string
    token: string
}

interface RegisterProps {
    name: string
    email: string
    password: string
}

interface RegisterResponseProps {
    message: string
    token: string
}

const LOGIN_ENDPOINT = '/auth/login'
const REGISTER_ENDPOINT = '/auth/register'

const login = async ({ email, password }: LoginProps) => {
    return await http.post<LoginResponseProps>(LOGIN_ENDPOINT, { email, password })
}

const register = async ({ name, email, password }: RegisterProps) => {
    return await http.post<RegisterResponseProps>(REGISTER_ENDPOINT, { name, email, password })
}

export default {
    login,
    register
}