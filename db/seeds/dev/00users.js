const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
   // Deletes ALL existing entries
   return knex('users')
      .del()
      .then(function() {
         // Inserts seed entries
         return knex('users').insert([
            {
               username: 'tommy',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Tommy',
               lastname: 'Carr',
               email: 'tommy@gmail.com',
               phone: 5104082587,
            },
            {
               username: 'linda',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Linda',
               lastname: 'La',
               email: 'linda@gmail.com',
               phone: 5102382227,
            },
            {
               username: 'jimmy',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Jimmy',
               lastname: 'Butler',
               email: 'jimmy@gmail.com',
               phone: 7072272555,
            },
            {
               username: 'nate',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Nate',
               lastname: 'Boyette',
               email: 'nate@gmail.com',
               phone: 5102332587,
            },
            {
               username: 'yanna',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Kayanna',
               lastname: 'Chandler',
               email: 'yanna@gmail.com',
               phone: 4152335576,
            },
         ]);
      });
};
