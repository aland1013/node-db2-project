const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

/* ----- GET /api/cars ----- */
router.get('/', (req, res) => {
  db('cars')
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

/* ----- GET /api/cars/:id ----- */
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars')
    .where({ id })
    .first()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to retrieve car' });
    });
});

/* ----- POST /api/cars ----- */
router.post('/', (req, res) => {
  const carData = req.body;

  db('cars')
    .insert(carData)
    .then((ids) => {
      db('cars')
        .where({ id: ids[0] })
        .then((newCar) => {
          res.status(201).json(newCar);
        });
    })
    .catch((err) => {
      console.log('POST error', error);
      res.status(500).json({ message: 'Failed to store new car in database' });
    });
});

module.exports = router;
