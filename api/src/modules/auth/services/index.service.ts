
import { SignupUserDTO } from "../dtos/signup-user.dto";
import User from "../models/user"
import AuthRepository from "../repositories/index.repository";
import jwt from 'jsonwebtoken'
import jwtConfig from '../config/jwt'
import { LoginUserDTO } from "../dtos/login-user.dto";

export default class AuthService {
    constructor(
        private readonly _authRepository: AuthRepository
    ) {}

    async signup({ email, password }: SignupUserDTO) {
        const user = new User(email, password)
        return await this._authRepository.signup(user)
    }

    login(data: LoginUserDTO) {
        const token = jwt.sign({ id: data.id, email: data.email }, jwtConfig.secret, {
            issuer: String(data.id),
            expiresIn: jwtConfig.expiryTime
        });
        return { token }
    }

    async getUser(filter = {}) {
        const user = await this._authRepository.getUser(filter)
        return user
    }
}