'use strict';

// ----------- Dependencies -----------
const express = require('express');
const app = express();
const router = express.Router();
const httpServer = require('http').Server(app);
const cors = require('cors');
const mongoose = require('mongoose')
// ----------- Environments -----------

const PORT = process.env.PORT;

// ----------- Sockets -----------

const socketServer = require('socket.io')(httpServer);
router.socketServer = socketServer;
const uuid = require('uuid');
// const events = require('./events');

// ----------- Routes -----------

app.use(cors());
require('../routes/gate-route')(router);
app.use(router);

// ----------- Server Controls -----------

const server = module.exports = {};

server.start = () => {
  return new Promise((resolve, reject) => {
    if (server.isOn) return reject(new Error('Server Error: Server Is Already Running'));
    server.http = httpServer.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
      server.isOn = true;
      mongoose.connect(MONGODB_URI);
      return resolve(server);
    });
  });
};

server.stop = () => {
  return new Promise((resolve, reject) => {
    if (!server.isOn) return reject(new Error('Server Error: Server Is Already Running'));
    server.http.close(() => {
      console.log(`Stopping Server`);
      server.isOn = false;
      mongoose.disconnect();
      return resolve(server);
    });
  });
};