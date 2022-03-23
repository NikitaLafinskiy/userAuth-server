import { Request, Response } from 'express';

declare global {
  namespace Express {
    interface User {
      id: number;
      username: string;
      email: string;
      password: string;
      about: string;
    }
  }
}

const getUser = (req: Request, res: Response) => {
  if (req.user) {
    const user = {
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
      about: req.user.about,
    };

    res.json({ user });
  } else if (!req.user) {
    res.json({ msg: 'User not found' });
  }
};

export default getUser;
