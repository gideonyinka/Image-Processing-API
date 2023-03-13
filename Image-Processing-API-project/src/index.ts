import express from 'express';
import resizer from './util/resizers';

//create application object
const app: express.Application = express();
const port = 3000;

//get endpoint
app.use(
  '/api',
  resizer,
  (_req: express.Request, _res: express.Response): void => {
    console.log('Server in progress');
  }
);

app.listen(port, () => console.log(`Listening to port ${port}!`));

//export default app;
export default app;
