import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
  if (req.user) {
    console.log(req.user);
    res.json({ user: req.user });
  } else if (!req.user) {
    res.json({ msg: 'No user found' });
  }
};

export default login;
