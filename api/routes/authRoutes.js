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
      const user = await db('users').insert(creds);
      const token = authHelper.generateToken(creds);
      console.log('user', user);
      res.status(201).json({
         message: `Registration successful`,
         token,
         userId: user,
      });
   } catch (err) {
      console.error(err.stack);
      console.error(err);
      console.error(err.message);
      res.status(500).json({ message: `Unable to register` });
   }
});

route.post('/login', async (req, res) => {
   const creds = req.body;

   try {
      const user = await db('users')
         .where({ username: creds.username })
         .first();

      if (user && bcrypt.compareSync(creds.password, user.password)) {
         const token = authHelper.generateToken(user);

         res.status(202).json({
            message: `Welcome back ${user.firstname} ${user.lastname}`,
            token,
            userId: user.userId,
         });
      } else {
         res.status(401).json({ message: `Unauthorized credentials` });
      }
   } catch (err) {
      res.status(500).json({ message: `Unable to login` });
   }
});

module.exports = route;
