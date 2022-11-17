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

// GET /api/orders
router.get('/', requireToken, async (req, res, next) => {
  try {
    res.send(await Order.findAll());
  } catch (err) {
    next(err);
  }
});

// GET /api/orders/:id
router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findOne({ where: { userId: req.params.id, completed: false } })
    console.log(order)
    res.send(await Order_Products.findAll({where: {orderId: order.id}}))
  } catch (err) {
    next(err)
  }
})

// POST /api/orders
router.post('/', requireToken, async (req, res, next) => {
  try {
    res.status(201).send(await Order.create(req.body));
  } catch (err) {
    next(err);
  }
});

// POST /api/orders/addproduct
router.post('/addproduct', requireToken, async (req, res, next) => {
  try {
    // find user and find or create order
    console.log(req.body)
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
    if (!created) {
      await orderProducts.update({
        quantity: orderProducts.quantity + req.body.quantity,
      });
    } else {
      // if order product created update its price
      console.log(req.body.price)
      console.log(req.body.imageUrl)
      await orderProducts.update({ price: req.body.price, imageUrl: req.body.imageUrl });
    }
    res.send(
      await Order_Products.findAll({ where: { orderId: orderValues.id } }),
    );
  } catch (err) {
    next(err);
  }
});

// PUT /api/orders/:id
router.put('/:id', async (req, res, next) => {
  try {
    const order = await Order.findOne({ where: { userId: req.params.id, completed: false}});
    const product = await Product.findByPk(req.body.productId)
    const orderProduct = await Order_Products.findOne({
      where: {
        productId: product.id,
        orderId: order.id,
      }
    })
    await orderProduct.update({
      quantity: req.body.quantity,
    })
    res.send(await Order_Products.findAll({where: {orderId: order.id}}))
  } catch (err) {
    next(err)
  }
})

// DELETE /api/orders/:id
router.delete('/:id', async (req, res, next) => {
  try {
    console.log(req.body)
    const order = await Order.findOne({ where: { userId: req.params.id, completed: false}});
    const product = await Product.findByPk(req.body.product.productId)
    const orderProduct = await Order_Products.findOne({
      where: {
        productId: product.id,
        orderId: order.id,
      }
    })
    await orderProduct.destroy();
    res.send(await Order_Products.findAll({where: {orderId: order.id}}))
  } catch (err) {
    next(err);
  }
})

module.exports = router;
