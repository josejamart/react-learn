const restMockMiddleware = require('rest-mock-middleware');
const express = require('express');
const {resolve} = require('path'); 
const cors = require('cors');

let app = express();
app.use(
  cors(),
  restMockMiddleware({
  root_dir: resolve(__dirname, "mocks")
}));
app.listen(4000);