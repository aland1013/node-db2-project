exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '1FDEE14N3MHA09197',
          make: 'Lexus',
          model: 'GX',
          mileage: 22000
        },
        {
          VIN: 'JH4CU26679C067441',
          make: 'Subaru',
          model: 'Ascent',
          mileage: 57515
        },
        {
          VIN: '2HGFA1F56AH338498',
          make: 'Toyota',
          model: 'Highlander',
          mileage: 14464
        }
      ]);
    });
};
