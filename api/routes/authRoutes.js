const express = require('express');
const bcrypt = require('bcryptjs');
const route = express.Router();
const db = require('../../data/dbConfig');

const authHelper = require('../../common/authHelpers');

route.post('/register', async (req, res) => {
   const creds = req.body;
   const hash = bcrypt.hashSync(creds.password, 11);
   creds.password = hash;

   try {
      await db('users').insert(creds);
      const token = authHelper.generateToken(creds);
      res.status(201).json({ message: `Registration successful`, token });
   } catch (err) {
      res.status(500).json({ message: `Unable to register` });
   }
});

module.exports = route;
