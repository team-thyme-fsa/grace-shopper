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

//PUT /api/orders/
router.put('/', async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        userId: req.body.userId,
        completed: false,
      },
    });
    await order.update({ completed: true });
    const user = await User.findByPk(req.body.userId);
    console.log(user);
    const newOrder = await Order.create({
      userId: req.body.userId,
      shippingInfo: user.address,
      billingInfo: user.address,
      completed: false,
    });
    const products = await Order_Products.findAll({
      where: { orderId: newOrder.id },
    });
    res.send(products);
  } catch (error) {
    next(error);
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
        completed: false,
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
    console.log(req.body.price);
    if (!created) {
      await orderProducts.update({
        quantity: orderProducts.quantity + req.body.quantity,
      });
    } else {
      // if order product created update its price
      console.log(req.body.price);
      await orderProducts.update({ price: req.body.price });
    }
    res.send(
      await Order_Products.findAll({ where: { orderId: orderValues.id } }),
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;
