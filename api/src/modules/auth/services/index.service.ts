
import { SignupUserDTO } from "../dtos/signup-user.dto";
import User from "../models/user"
import AuthRepository from "../repositories/index.repository";
import { LoginUserDTO } from "../dtos/login-user.dto";
import crypto from "../../../libs/crypto";
import token from "../libs/token";

interface LoginResponseProps {
    token: string
}

export default class AuthService {
    constructor(
        private readonly _authRepository: AuthRepository
    ) { }

    async signup({ name, email, password }: SignupUserDTO) {
        const user = new User(email, password, name)
        return await this._authRepository.signup(user)
    }

    async signin({ email, password }: LoginUserDTO): Promise<LoginResponseProps> {
        const userEntity = await this.getUser({ email })
        if (!userEntity) {
            throw new Error('Login failed, try again.')
        }
        const passwordDecrypted = await crypto.decrypt(userEntity.password)
        if (password !== passwordDecrypted) {
            throw new Error('Login failed, try again.')
        }
        const tokenGenerated = token.generate({
            issuer: String(userEntity.id),
            payload: {
                id: userEntity.id,
                email: userEntity.email,
                name: userEntity.name
            }
        })
        return { token: tokenGenerated }
    }

    async getUser(filter = {}): Promise<User> {
        const user = await this._authRepository.getUser(filter)
        return user
    }
}