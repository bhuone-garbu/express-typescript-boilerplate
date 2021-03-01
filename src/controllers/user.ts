import { Request, Response } from 'express';

/// pretend DB
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'loyalty',
  },
  {
    id: 2,
    name: 'lion',
  },
];

const getUsers = (_: Request, res: Response) => {
  res.send(users);
};

const findOne = (req: Request, res: Response) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === parseInt(id, 10));

  if (!foundUser) res.status(404);

  res.send(foundUser);
};

const addUser = (req: Request, res: Response) => {
  const { name } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);
  res.status(201).send(newUser);
};

export { addUser, getUsers, findOne };
