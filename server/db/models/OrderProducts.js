const Sequelize = require('sequelize');
const db = require('../db');

const Order_Products = db.define('order_products', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
});

module.exports = Order_Products;
