exports.seed = function(knex, Promise) {
   // Deletes ALL existing entries
   return knex('users')
      .truncate()
      .then(function() {
         // Inserts seed entries
         return knex('users').insert([
            {
               userId: 1,
               username: 'tommy',
               password: 'password',
               firstName: 'Tommy',
               lastName: 'Carr',
               email: 'tommy@gmail.com',
               phone: 5104082587,
            },
            {
               userId: 2,
               username: 'linda',
               password: 'password',
               firstName: 'Linda',
               lastName: 'La',
               email: 'linda@gmail.com',
               phone: 5102382227,
            },
            {
               userId: 3,
               username: 'jimmy',
               password: 'password',
               firstName: 'Jimmy',
               lastName: 'Butler',
               email: 'jimmy@gmail.com',
               phone: 7072272555,
            },
            {
               userId: 4,
               username: 'nate',
               password: 'password',
               firstName: 'Nate',
               lastName: 'Boyette',
               email: 'nate@gmail.com',
               phone: 5102332587,
            },
            {
               userId: 5,
               username: 'yanna',
               password: 'password',
               firstName: 'Kayanna',
               lastName: 'Chandler',
               email: 'yanna@gmail.com',
               phone: 4152335576,
            },
         ]);
      });
};
