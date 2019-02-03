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

route.get('/:id', async (req, res) => {
   const { id } = req.params;
   const user = await db('users')
      .where({ userId: id })
      .first();

   try {
      !user
         ? res.status(404).json({ error: 'User does not exist' })
         : res.status(200).json(user);
   } catch (err) {
      res.status(500).json({ error: 'Unable to fetch the user' });
   }
});

module.exports = route;
