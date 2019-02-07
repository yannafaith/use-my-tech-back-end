const bcrypt = require('bcryptjs');
const faker = require('faker')

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
               thumbnail: faker.image.avatar()
            },
            {
               username: 'linda',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Linda',
               lastname: 'La',
               email: 'linda@gmail.com',
               phone: 5102382227,
               thumbnail: faker.image.avatar()
            },
            {
               username: 'jimmy',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Jimmy',
               lastname: 'Butler',
               email: 'jimmy@gmail.com',
               phone: 7072272555,
               thumbnail: faker.image.avatar()
            },
            {
               username: 'nate',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Nate',
               lastname: 'Boyette',
               email: 'nate@gmail.com',
               phone: 5102332587,
               thumbnail: faker.image.avatar()
            },
            {
               username: 'yanna',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Kayanna',
               lastname: 'Chandler',
               email: 'yanna@gmail.com',
               phone: 4082335576,
               thumbnail: faker.image.avatar()
            },
            {
               username: 'kelly',
               password: bcrypt.hashSync('password', 11),
               firstname: 'Kelly',
               lastname: 'Jones',
               email: 'kelly@gmail.com',
               phone: 4152335576,
               thumbnail: faker.image.avatar()
            },
            {
               username: faker.internet.username(),
               password: bcrypt.hashSync('password', 11),
               firstname: faker.name.firstName(),
               lastname: faker.name.lastName(),
               email: faker.internet.email(),
               phone: 8282435576,
               thumbnail: faker.image.avatar()
            },
            {
               username: faker.internet.username(),
               password: bcrypt.hashSync('password', 11),
               firstname: faker.name.firstName(),
               lastname: faker.name.lastName(),
               email: faker.internet.email(),
               phone: 7246245423,
               thumbnail: faker.image.avatar()
            },
            {
               username: faker.internet.username(),
               password: bcrypt.hashSync('password', 11),
               firstname: faker.name.firstName(),
               lastname: faker.name.lastName(),
               email: faker.internet.email(),
               phone: 6625333687,
               thumbnail: faker.image.avatar()
            },
            {
               username: faker.internet.username(),
               password: bcrypt.hashSync('password', 11),
               firstname: faker.name.firstName(),
               lastname: faker.name.lastName(),
               email: faker.internet.email(),
               phone: 33451355317,
               thumbnail: faker.image.avatar()
            },
            {
               username: faker.internet.username(),
               password: bcrypt.hashSync('password', 11),
               firstname: faker.name.firstName(),
               lastname: faker.name.lastName(),
               email: faker.internet.email(),
               phone: 2434274434,
               thumbnail: faker.image.avatar()
            },
            {
               username: faker.internet.username(),
               password: bcrypt.hashSync('password', 11),
               firstname: faker.name.firstName(),
               lastname: faker.name.lastName(),
               email: faker.internet.email(),
               phone: 4534513452,
               thumbnail: faker.image.avatar()
            },
            {
               username: faker.internet.username(),
               password: bcrypt.hashSync('password', 11),
               firstname: faker.name.firstName(),
               lastname: faker.name.lastName(),
               email: faker.internet.email(),
               phone: 6426682425,
               thumbnail: faker.image.avatar()
            },
         ]);
      });
};
