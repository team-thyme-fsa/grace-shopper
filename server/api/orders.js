const express = require('express');
const {
  models: { Order, Order_Products, Product },
} = require('../db');
const User = require('../db/models/Users');

const router = express.Router();

// GET /api/orders
router.get('/', async (req, res, next) => {
  try {
    res.send(await Order.findAll());
  } catch (err) {
    next(err);
  }
});

// POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Order.create(req.body));
  } catch (err) {
    next(err);
  }
});

// POST /api/orders/addproduct
router.post('/addproduct', async (req, res, next) => {
  try {
    // find user and find or create order
    const user = await User.findByPk(req.body.userId);
    const [order, create] = await Order.findOrCreate({
      where: {
        userId: user.id,
        shippingInfo: user.address,
        billingInfo: user.address,
      },
    });
    const orderValues = order.dataValues;
    // find product
    const product = await Product.findOne({ where: { name: req.body.name } });
    // find or create order product
    const [orderProducts, created] = await Order_Products.findOrCreate({
      where: { productId: product.id, orderId: orderValues.id },
    });
    // if order product exists update quantity
    if (!created) {
      await orderProducts.update({
        quantity: orderProducts.quantity + req.body.quantity,
      });
      res.send(orderProducts);
    } else {
      // if order product created update its price
      await orderProducts.update({ price: req.body.price });
      res.send(orderProducts);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
