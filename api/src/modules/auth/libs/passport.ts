import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'
import jwtConfig from '../config/token';
import AuthRepository from '../repositories/index.repository';
import AuthService from '../services/index.service';
import Database from '../../../libs/database';

const authService = new AuthService(new AuthRepository(new Database))

passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    try {
        const { name } = req.body
        if (!name) {
          return done(null, false, { message: 'Name is required.' });
        }
        const user = await authService.signup({ name, email, password });
        return done(null, user);
    } catch (error) {
        done(error);
    }
}));

passport.use('signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, async (email, password, done) => {
    try {
        const data = await authService.signin({ email, password })
        return done(null, { ...data }, { message: 'Logged in Successfully' });
      } catch (error: any) {
        return done(null, false, { message: error });
      }
}));

passport.use('jwt', new JwtStrategy(
    {
        secretOrKey: jwtConfig.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
            try {
              return done(null, { user: token.user });
            } catch (error) {
              return done(error);
            }
        }
    )
);

export default passport

