import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connections';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); //permite o acesso as images salvas
app.use(errorHandler);

app.listen(3333);
