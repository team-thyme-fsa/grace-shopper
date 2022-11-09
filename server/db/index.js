//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/Users')
const Order = require('./models/Orders')
const Product = require('./models/Products')
const Order_Products = require('./models/OrderProducts')

//associations could go here!
Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, { through: Order_Products });
Product.belongsToMany(Order, { through: Order_Products });

module.exports = {
  db,
  models: {
    User,
    Order,
    Product,
    Order_Products
  },
}
