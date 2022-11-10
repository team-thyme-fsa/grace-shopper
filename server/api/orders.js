const express = require('express');
const {
  models: { Order },
} = require('../db');

const router = express.Router();

// GET /api/orders
router.get('/', async (req, res, next) => {
  try {
    res.send(await Order.findAll());
  } catch (err) {
    next(err);
  }
})

// POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Order.create(req.body));
  } catch (err) {
    next(err);
  }
})

module.exports = router;
