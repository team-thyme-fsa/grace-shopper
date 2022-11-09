const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Orders = require('./models/Orders');
const OrderProducts = require('./models/OrderProduct');

User.hasMany(Orders);
Orders.belongsTo(User);

Orders.hasMany(OrderProducts);
OrderProducts.belongsToMany(Orders);

Product.hasMany(OrderProducts);
OrderProducts.belongsToMany(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    OrderProducts,
    Orders,
  },
};
