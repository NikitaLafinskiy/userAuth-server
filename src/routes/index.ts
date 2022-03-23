import registerRoute from './user-auth/register.route';
import loginRoute from './user-auth/login.route';
import getUserRoute from './user-auth/getUser.route';
import { Application } from 'express';

export default function routes(app: Application) {
  app.use(registerRoute);
  app.use(loginRoute);
  app.use(getUserRoute);
}
