import express, { Application } from 'express';

import users from './users';
import msgs from './msgs';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', users);
app.use('/msgs', msgs);

app.listen(port, () => {
  console.log(`Connected successfully at port ${port}.`);
});
