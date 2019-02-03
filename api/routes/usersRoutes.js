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

route.get('/:id/items', async (req, res) => {
   const { id } = req.params;
   const user = await db('users')
      .where({ userId: id })
      .first();
   const items = await db('items').where({ owner: id });

   try {
      !user
         ? res.status(404).json({ error: 'User does not exist' })
         : res.status(202).json(items);
   } catch (err) {
      res.status(500).json({ error: `Unable to fetch the user's items` });
   }
});

route.post('/', async (req, res) => {
   const creds = req.body;

   try {
      await db('users').insert(creds);
      res.status(201).json({ message: 'New user created' });
   } catch (err) {
      res.status(500).json({ error: `Unable to create a new user` });
   }
});

module.exports = route;
