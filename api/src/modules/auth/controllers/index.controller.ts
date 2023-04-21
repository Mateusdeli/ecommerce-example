import { NextFunction, Request, Response } from 'express'
import Database from '../../../libs/database';
import { LoginUserDTO } from '../dtos/login-user.dto';
import User from '../models/user';
import AuthRepository from '../repositories/index.repository';
import AuthService from '../services/index.service';
import { HttpStatusCodeEnum } from '../../../enums/http-status-code.enum';

const authService = new AuthService(new AuthRepository(new Database))

const signup = async (req: Request, res: Response) => {
    return res.status(HttpStatusCodeEnum.SUCCESS).send({
      message: 'Signup successful',
      user: req.user
    });
}

const login = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as User
  try {
    const { token } = authService.login(new LoginUserDTO(user.email, user.id))
    return res.status(HttpStatusCodeEnum.SUCCESS).send({
      message: 'Login successful',
      token
    });
  } catch(error: any) {
    return res.status(HttpStatusCodeEnum.BAD_REQUEST).send({
      message: error.message
    })
  }
};

export default {
    signup,
    login
}