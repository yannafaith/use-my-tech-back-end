const express = require('express');
const route = express.Router();

const db = require('../../data/dbConfig');

route.get('/', async (req, res) => {
   const users = await db('users');
   try {
      res.status(200).json(users);
   } catch (err) {
      res.status(500).json({ message: 'Could not retrieve the list of users' });
   }
});

module.exports = route;
