exports.up = function (knex, Promise) {
  return knex.schema.alterTable('cars', (tbl) => {
    tbl.text('transmission', 128);
    tbl.text('title status', 128);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('cars', (tbl) => {
    tbl.dropColumn('transmission');
    tbl.dropColumn('title status');
  });
};
