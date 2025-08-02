import serverless from 'serverless-http';
import app from './server/index';

export default {
  fetch: serverless(app),
};