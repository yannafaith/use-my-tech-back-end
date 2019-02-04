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

route.post('/', async (req, res) => {
   const creds = req.body;

   try {
      await db('items').insert(creds);
      res.status(201).json({ message: 'A new item has been added' });
   } catch (err) {
      res.status(500).json({ error: 'Unable to add a new item' });
   }
});

route.patch('/:id', async (req, res) => {
   const { id } = req.params;
   const changes = req.body;

   try {
      const item = await db('items')
         .where({ itemId: id })
         .first();

      !item
         ? res.status(404).json({ error: 'Item does not exist' })
         : await db('items')
              .where({ itemId: id })
              .update(changes);
      res.status(202).json({
         message: `item: '${item.title}' has been updated`,
      });
   } catch (err) {
      res.status(500).json({ error: 'Unable to update the item' });
   }
});

route.delete('/:id', async (req, res) => {
   const { id } = req.params;

   try {
      const item = await db('items')
         .where({ itemId: id })
         .first();

      !item
         ? res.status(404).json({ error: 'Item does not exist' })
         : await db('items')
              .where({ itemId: id })
              .delete();

      res.status(202).json({ message: 'The item has been deleted.' });
   } catch (err) {
      res.status(500).json({ error: 'Unable to delete the item' });
   }
});

module.exports = route;
