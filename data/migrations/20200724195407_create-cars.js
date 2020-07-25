const { table } = require('../db-config');

exports.up = function (knex, Promise) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments();
    tbl.text('VIN', 128).notNullable().unique();
    tbl.text('make', 128).notNullable();
    tbl.text('model', 128).notNullable();
    tbl.integer('mileage').notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('cars');
};
