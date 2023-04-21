import http from "../../../libs/http"
import localStorage from "../../../utils/local-storage.util"

interface LoginProps {
    email: string
    password: string
}

interface LoginResponseProps {
    message: string
    token: string
}

const LOGIN_ENDPOINT = '/auth/login'

const login = async ({ email, password }: LoginProps) => {
    return await http.post<LoginResponseProps>(LOGIN_ENDPOINT, { email, password })
}

export default {
    login
}