import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello from Express!');
});

export const onRequest = serverless(app);