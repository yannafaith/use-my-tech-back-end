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

route.get('/:id', async (req, res) => {
   const { id } = req.params;

   try {
      const item = await db('items')
         .where({ itemId: id })
         .first();

      !item
         ? res.status(404).json({ error: 'Item does not exist' })
         : res.status(200).json(item);
   } catch (err) {
      res.status(500).json({ error: 'Unable to fetch the item' });
   }
});

module.exports = route;
