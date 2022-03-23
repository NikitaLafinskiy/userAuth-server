import { Strategy, IVerifyOptions } from 'passport-local';
import User from '../entity/User.entity';
import { compare } from 'bcrypt';
import * as passport from 'passport';

declare global {
  namespace Express {
    interface User {
      id: number;
    }
  }
}

const strategyOptions = {
  usernameField: 'email',
  passwordField: 'password',
};

const strategyFunction = async (
  email: any,
  password: string,
  done: (error: any, user?: any, options?: IVerifyOptions | undefined) => void
) => {
  try {
    const user = await User.findOneBy({ email });
    if (user) {
      console.log(user);
      const isMatch = await compare(password, user.password);
      if (isMatch) {
        done(null, user);
      } else if (!isMatch) {
        done({ msg: 'Invalid password' });
      }
    }
  } catch (err) {
    console.error(err);
    done({ msg: 'Unable to log in', err });
  }
};

const strategy = new Strategy(strategyOptions, strategyFunction);

const authPassport = (passportVar: passport.PassportStatic) => {
  passportVar.use(strategy);

  passportVar.serializeUser((user, done) => {
    done(null, user.id);
  });

  passportVar.deserializeUser(async (id: number, done) => {
    const user = await User.findOneBy({ id });
    if (user) {
      done(null, user);
    } else if (!user) {
      done({ msg: 'User not found' });
    }
  });
};

export default authPassport;
