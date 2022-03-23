import expressSession from 'express-session';

const session = {
  cookie: { secure: false, maxAge: 60 * 1000 * 60 * 24 * 31 },
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
};

export default expressSession(session);
