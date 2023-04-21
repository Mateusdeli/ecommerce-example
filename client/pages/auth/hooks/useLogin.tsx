import authService from '../services/auth.service';

export default function useLogin() {
    const execute = async (email: string, password: string) => {
        if (!email || !password) return
        try {
            const { token, message } = await authService.login({ email, password })
            localStorage.set('access_token', token)
            return message
        } catch(error) {
            return error
        }
    }

    return {
        execute
    }
}
