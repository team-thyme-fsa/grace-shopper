const express = require('express');
const {
  models: { Order, Order_Products, Product, User },
} = require('../db');

const router = express.Router();

const requireToken = async (req, res, next) => {
  const user = await User.findByToken(req.headers.authorization);

  req.user = user;
  next();
};

// POST /api/admin/product
router.post('/product', requireToken, async (req, res, next) => {
  try {
    if (req.user.admin) {
      await Product.create(req.body.product);
      res.status(201).send(await Product.findAll());
    } else {
      res.status(403).send('Forbidden: Access Denied');
    }
  } catch (err) {
    next(err);
  }
});

// PUT /api/admin/product/:id
router.put('/product/:id', requireToken, async (req, res, next) => {
  try {
    if (req.user.admin) {
      const product = await Product.findByPk(req.params.id);
      await product.update(req.body.product);
      res.send(await Product.findAll());
    } else {
      res.status(403).send('Forbidden: Access Denied');
    }
  } catch (err) {
    next(err);
  }
});

// DELETE /api/admin/product/:id
router.delete('/product/:id', requireToken, async (req, res, next) => {
  try {
    if (req.user.admin) {
      const product = await Product.findByPk(req.params.id);
      await product.destroy();
      res.send(product);
    } else {
      res.status(403).send('Forbidden: Access Denied');
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
