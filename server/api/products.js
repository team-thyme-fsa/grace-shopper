const express = require('express');
const {
  models: { Product },
} = require('../db');

const router = express.Router();

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    res.send(await Product.findAll());
  } catch (err) {
    next(err);
  }
});

// GET /api/products/id
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Product.findByPk(req.params.id));
  } catch (err) {
    next(err);
  }
})

module.exports = router;
