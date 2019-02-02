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
               firstName: 'Tommy',
               lastName: 'Carr',
               email: 'tommy@gmail.com',
               phone: 5104082587,
            },
         ]);
      });
};
