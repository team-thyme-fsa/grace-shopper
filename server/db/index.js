//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Order = require('./models/Order')

//associations could go here!
Order.belongsTo(User);
User.hasMany(Order);

module.exports = {
  db,
  models: {
    User,
    Order
  },
}
