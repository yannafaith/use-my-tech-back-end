const express = require('express');
const middelware = require('../config/middleware');
const server = express();

middelware(server);

server.get('/', (req, res) => {
   res.send('Sanity check passed!');
});

module.exports = server;
