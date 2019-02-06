const express = require('express');
const bcrypt = require('bcryptjs');
const route = express.Router();
const db = require('../../data/dbConfig');

const authHelper = require('../../common/authHelpers');

route.post('/register', (req, res) => {
   const creds = req.body;
   const hash = bcrypt.hashSync(creds.password, 11);
   creds.password = hash;

   db('users')
      .insert(creds)
      .then(resonse => {
         const token = authHelper.generateToken(creds);
         res.status(201).json({
            message: `Registration successful`,
            token,
            response,
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json({ message: `Unable to register` });
      });
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
