const express = require('express');
const route = express.Router();

const db = require('../../data/dbConfig');

route.get('/', async (req, res) => {
   try {
      const items = await db('items');
      res.status(200).json(items);
   } catch (err) {
      res.status(500).json({ message: 'Could not retrieve the list of items' });
   }
});

module.exports = route;
