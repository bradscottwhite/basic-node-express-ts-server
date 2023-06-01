import express, { Request, Response } from 'express';

const router = express.Router();


// Function to generate random ids:
const genRandomId = () =>
  Math.random().toString(36).substr(2, 16);


// Mock message data:

interface MsgData {
  text: string;
  user: string;
  date: Date;
}

interface MsgsData {
  [key: string]: MsgData
}

const msgs: MsgsData = {
  'jlqwoozooo': { text: 'Hey y\'all!', user: 'bradwht', date: new Date(2023, 5, 30, 12, 21, 33) },
  'fjkjkadlzl': { text: 'Howdy sir.', user: 'carwht', date: new Date(2023, 5, 30, 12, 25, 3) },
  'hjhajkflas': { text: 'Hello!', user: 'floren', date: new Date(2023, 5, 30, 12, 27, 13) }
};


// Router calls for CRUD user API:

router.get('/:id', (req: Request, res: Response) => {
  let id = String(req.params.id);

  if (msgs[id])
    res.send(msgs[id]);
  else
    res.send(`Could not find user ${id}.`);
});

router.get('', (req: Request, res: Response) => {
  // NOTE: Messages are not sorted
  res.send(msgs);
});

router.post('/:user', (req: Request, res: Response) => {
  let user = String(req.params.user);

  let { text } = req.body;

  let id = genRandomId();

  let date = new Date();

  msgs[id] = { text, user, date };

  res.send(`Message ${id} by ${user} added at ${date}.`);
});

router.put('/:id', (req: Request, res: Response) => {
  let id = String(req.params.id);

  let { text } = req.body;

  msgs[id].text = text;

  res.send(`Message ${id} updated.`);
});

router.delete('/:id', (req: Request, res: Response) => {
  let id = String(req.params.id);

  delete msgs[id];

  res.send(`Message ${id} deleted.`);
});

export default router;
