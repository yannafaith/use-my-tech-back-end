exports.seed = function(knex, Promise) {
   // Deletes ALL existing entries
   return knex('items')
      .truncate()
      .then(function() {
         // Inserts seed entries
         return knex('items').insert([
            {
               itemId: 1,
               owner: 1,
               title: 'Portable Speaker',
               description: 'Great speaker for a gathering or party',
               brand: 'Bose',
               model: '5000XL',
               dailyPrice: 100,
               weeklyPrice: 450,
               label: 'Speaker',
               available: true,
               renter: null,
            },
         ]);
      });
};
