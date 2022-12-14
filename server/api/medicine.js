const express = require('express');
const {
  models: { Product },
} = require('../db');

const router = express.Router();

// GET /api/medicine
router.get('/', async (req, res, next) => {
  try {
    res.send(
      await Product.findAll({
        where: {
          type: 'MEDICINE',
        },
      }),
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;
