import { Router } from 'express';
import { body } from 'express-validator';

import { validateRequest } from '../../middlewares/validateRequest';
import { getUsers, addUser, findOne } from '../../controllers/user';

const userRouter = Router();

userRouter.get('/users/:id', findOne);
userRouter.get('/users', getUsers);

userRouter.post(
  '/users',
  body('name').not().isEmpty().withMessage('name is required'),
  validateRequest,
  addUser,
);

export { userRouter };
