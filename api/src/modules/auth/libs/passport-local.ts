import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'
import jwtConfig from '../config/jwt';
import AuthRepository from '../repositories/index.repository';
import AuthService from '../services/index.service';
import crypto from '../../../libs/crypto';
import Database from '../../../libs/database';

const authService = new AuthService(new AuthRepository(new Database))

passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    try {
        const user = await authService.signup({ email, password });
        return done(null, user);
    } catch (error) {
        done(error);
    }
}));

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email, password, done) => {
    try {
        const user = await authService.getUser({ email })

        if (!user) {
          return done(null, false, { message: 'Login failed, try again.' })
        }

        const passwordDecrypted = await crypto.decrypt(user.password)
        
        if (password !== passwordDecrypted) {
          return done(null, false, { message: 'Login failed, try again.' })
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
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

