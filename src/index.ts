import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from 'path';

import { logger } from './middelwares/logger';
import { sendMail } from "./mail";
import { data } from "./data";




dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views', './mail-views')

app.use(logger)

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});

app.get('/api/:email/:name/:message', async (req, res) => {
  const {email, name, message } = req.params;

  data.email = email;
  data.name = name;
  data.message = message;

 
  try {
    await sendMail();
    res.send('Email sent successfully!');
  } catch (error) {
    res.status(500).send('Failed to send email');
  }
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});