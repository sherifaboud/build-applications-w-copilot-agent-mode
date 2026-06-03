import { Router } from 'express';
import { User } from '../models';

const usersRouter = Router();

usersRouter.get('/', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ displayName: 1 }).lean();
    response.json({
      resource: 'users',
      count: users.length,
      items: users,
    });
  } catch (error) {
    next(error);
  }
});

export default usersRouter;