const router = require('express').Router();
const {
  models: { Product, Order_Products, Order },
} = require('../db');
const Product = require('../db/models/Products');
module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    const { orderid, productid } = req.body;
    const product = await Product.findOne({ where: { orderId: orderid } });
    const orderProduct = await Order_Products.findOne({
      where: { orderId: orderid },
    });
    if (!product.orderId) {
      product.addOrder(productid);
    } else {
      orderProduct.quantity++;
    }
    res.send(cart);
  } catch (error) {
    next(error);
  }
});
