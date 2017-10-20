'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('commodity').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('commodity', function(table) {
        table.increments();
        table.string('title').notNullable().defaultTo('');
        table.float('price').notNullable().defaultTo(0.0);
        table.string('image').notNullable().defaultTo('');
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
  });
};
