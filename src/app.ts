import { createConnection } from 'typeorm';
import express from 'express';
import routes from './routes';
import cors from 'cors';
import passport from 'passport';
import authPassport from './config/passport.config';
import session from './config/session';
import User from './entity/User.entity';

require('dotenv').config();

const app = express();

const connect = async () => {
  createConnection();
};
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(session);
authPassport(passport);
app.use(passport.initialize());
app.use(passport.session());

routes(app);

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
