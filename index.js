const express = require('express');
const bodyparser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const server = require('http').Server(app);
const cors = require('cors');

const mongoose = require('./db/mongoose');
const userRoute = require('./routes/user');
const liveUsers = require('./routes/liveUsers');
global.User = require('./models/user');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/', userRoute);
app.use('/', liveUsers);
app.use(cors());
server.listen(port, () => {
  console.log('server has been started');
});