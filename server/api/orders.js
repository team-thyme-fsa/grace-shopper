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
})

// POST /api/orders
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Order.create(req.body));
  } catch (err) {
    next(err);
  }
})

// PUT /api/orders/addproduct
router.put('/addproduct', async (req, res, next) => {
  try {
    // order can be find or create
    // body should include userId, price, quantity, product name
    // doesn't work if userId is changed
    const user = await User.findByPk(req.body.userId)
    const [ order, create ] = await Order.findOrCreate({ where: { userId: req.body.userId, shippingInfo: user.address, billingInfo: user.address }});
    const product = await Product.findOne({ where: { name: req.body.name }})
    const orderProducts = await Order_Products.findOne({ where: { productId: product.id } })
    if(orderProducts) {
      await orderProducts.update({ quantity: orderProducts.quantity + req.body.quantity })
      res.send(product)
    } else {
      const orderValues = order.dataValues
      await order.addProduct(product.id)
      const orderProduct = await Order_Products.findOne({where: {
        orderId: orderValues.id, productId: product.id
      }})
      await orderProduct.update({price: req.body.price})
      res.send(orderProduct);
    }
  } catch (err) {
    next(err);
  }
})

module.exports = router;
