import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import products from './products';
import order from './order';
import cart from './cart';

const reducer = combineReducers({
  auth: auth,
  products: products,
  order: order,
  cart: cart,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })),
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
export * from './products';
export * from './order';
