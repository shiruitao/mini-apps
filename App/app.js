'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    // 首页表
    const commodity = yield app.mysql.query(knex.schema.hasTable('commodity').toString());
    if (commodity.length === 0) {
      const commoditySchema = knex.schema.createTableIfNotExists('commodity', function(table) {
        table.increments();
        table.string('title').notNullable().defaultTo('');
        table.float('price', 5, 1).notNullable().defaultTo(0.0);
        table.string('image').notNullable().defaultTo('');
        table.string('class').defaultTo('');
        table.string('detail').defaultTo('');
        table.charset('utf8');
      });
      yield app.mysql.query(commoditySchema.toString());
      yield ctx.helper.unique(app, 'commodity', 'image');
    }
    // 购物车表
    const cart = yield app.mysql.query(knex.schema.hasTable('carts').toString());
    if (cart.length === 0) {
      const cartSchema = knex.schema.createTableIfNotExists('carts', function(table) {
        table.increments();
        table.string('title').notNullable().defaultTo('');
        table.float('price', 5, 1).notNullable().defaultTo(0.0);
        table.string('image').notNullable().defaultTo('');
        table.boolean('selected').defaultTo(true);
        table.integer('num').defaultTo(1);
        table.string('wechat').defaultTo('');
        table.charset('utf8');
      });
      yield app.mysql.query(cartSchema.toString());
      yield ctx.helper.unique(app, 'carts', 'title');
    }
    const order = yield app.mysql.query(knex.schema.hasTable('order').toString());
    if (order.length === 0) {
      const orderSchema = knex.schema.createTableIfNotExists('order', function(table) {
        table.increments();
        table.string('title').notNullable().defaultTo('');
        table.float('price', 5, 1).notNullable().defaultTo(0.0);
        table.string('image').notNullable().defaultTo('');
        table.integer('num').defaultTo(1);
        table.string('name').notNullable().defaultTo('');
        table.string('phone').defaultTo(1);
        table.string('address').notNullable().defaultTo('');
        table.charset('utf8');
      });
      yield app.mysql.query(orderSchema.toString());
    }
  });
};
