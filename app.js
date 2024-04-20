import express from 'express';
import {} from 'dotenv/config';
import morgan from 'morgan';
import mongo from './src/config/mongodb/mongo.js';
import routes from './src/routes/index.js';
import { errorHandler } from './src/middlewares/error-handler.js';
import { kafkaRunner } from './src/modules/kafka/index.js';

const app = express();

mongo();
kafkaRunner();

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);
app.use(errorHandler);

const obj = {
  username: "afifafian"
};
console.log(JSON.stringify(obj));

export default app;
