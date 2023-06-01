import express, { Request, Response } from 'express';

const router = express.Router();

// Mock user data:

interface UserData {
  rank: string;
}

interface UsersData {
  [key: string]: UserData
}

const users: UsersData = {
  'bradwht': { rank: 'jr' },
  'carwht': { rank: 'jr' },
  'floren': { rank: 'sr' }
};

// Router calls for CRUD user API:

router.get('/:id', (req: Request, res: Response) => {
  let id = String(req.params.id);

  if (users[id])
    res.send(users[id]);
  else
    res.send(`Could not find user ${id}.`);
});

router.get('', (req: Request, res: Response) => {
  res.send(users);
});

router.post('/:id', (req: Request, res: Response) => {
  let id = String(req.params.id);

  let user = req.body;

  users[id] = user;

  res.send(`User ${id} added.`);
});

router.put('/:id', (req: Request, res: Response) => {
  let id = String(req.params.id);

  let user = req.body;

  users[id] = user;

  res.send(`User ${id} updated.`);
});

router.delete('/:id', (req: Request, res: Response) => {
  let id = String(req.params.id);

  delete users[id];

  res.send(`User ${id} deleted.`);
});

export default router;
