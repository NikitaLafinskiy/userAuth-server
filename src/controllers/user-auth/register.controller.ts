import { Request, Response } from 'express';
import User from '../../entity/User.entity';
import { hash, genSalt } from 'bcrypt';

const register = async (req: Request, res: Response) => {
  const { username, email, about } = req.body;
  const salt = await genSalt(10);
  const password = await hash(req.body.password, salt);
  const user = User.create({ username, email, password, about });
  await user.save();

  res.json({ msg: 'Successfully registered', user });
};

export default register;
