exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', tbl => {
      tbl.increments();

      tbl.string('username')
         .unqiue()
         .notNullable();
      tbl.string('firstName').notNullable();
      tbl.string('lastName').notNullable();
      tbl.string('email').notNullable();
      tbl.integer('phone');
   });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTableIfExists('users');
};
