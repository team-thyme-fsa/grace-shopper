const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  shippingInfo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  billingInfo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Order
