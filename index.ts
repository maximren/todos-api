import { Response, Request, Express } from 'express';
import express = require('express');
import mongoose = require('mongoose');
import * as bodyParser from "body-parser";

const todoRouter = require("./src/routes/todos")

const app: Express = express();

app.use(bodyParser.json());

app.use(todoRouter, (req: Request, res: Response): void => {
  res.send('todos');
});

mongoose.connect(
  'mongodb+srv://max:max@todo-claster-jmpet.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log('DB is connected');
  },
);

app.listen(3000);
