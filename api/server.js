const express = require('express');
const middelware = require('../config/middleware');
const server = express();

const usersRoutes = require('./routes/usersRoutes');
const itemsRoutes = require('./routes/itemsRoutes');

middelware(server);

server.get('/', (req, res) => {
   res.send('Sanity check passed!');
});

server.use('/api/users', usersRoutes);
server.use('/api/items', itemsRoutes);

module.exports = server;
