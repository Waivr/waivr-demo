/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createCustomer } from './controllers/customers';
import envs from './serverConfig';
import { connectAccounts } from './controllers/connect-accounts';
import { paymentInstructions } from './controllers/payment-instructions';
import { confirmPayment } from './controllers/confirm-payment';

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3001;

// app.use(cookieParser());

app.use(express.static('dist'));

app.use(express.static('public'));

app.post('/api/create-customer', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  try {
    const { response, request } = createCustomer(req.body);

    res.end(JSON.stringify({ request, response }));
    return;
  } catch (err) {
    console.log(err);
  }

  res.statusCode = 500;
  res.end(JSON.stringify({ status: 'error' }));
});

app.post('/api/connect-accounts', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  try {
    const { response, request } = connectAccounts(req.body);

    res.end(JSON.stringify({ request, response }));
    return;
  } catch (err) {
    console.log(err);
  }

  res.statusCode = 500;
  res.end(JSON.stringify({ status: 'error' }));
});

app.post('/api/payment-instructions', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  try {
    const { response, request } = paymentInstructions(req.body);

    res.end(JSON.stringify({ request, response }));
    return;
  } catch (err) {
    console.log(err);
  }

  res.statusCode = 500;
  res.end(JSON.stringify({ status: 'error' }));
});

app.post('/api/confirm-payment', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  try {
    const { response, request } = confirmPayment(req.body);

    res.end(JSON.stringify({ request, response }));
    return;
  } catch (err) {
    console.log(err);
  }

  res.statusCode = 500;
  res.end(JSON.stringify({ status: 'error' }));
});

app.get('*', (_req, res) => {
  res.sendFile(path.resolve('dist', 'waivr-demo/index.html'));
});

console.log('Server envs', envs);

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});
