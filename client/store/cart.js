import axios from 'axios';

/**
 * Action Types
 */
 const ADD_TO_CART = 'ADD_TO_CART';

 /**
 * Action Creators
 */
const _addToCart = (products) => ({ type: ADD_TO_CART, products });

/**
 * Thunk Creators
 */
export const addToCart = (user, product) => {
  return async (dispatch) => {
    if (user.id) {
      const { data } = await axios.post('/api/orders/addproduct', {
        userId: user.id,
        name: product.name,
        quantity: product.quantity,
      });
      dispatch(_addToCart(data));
    } else {
      let cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : {products: []}
      if(cart.products.length === 0) {
        cart.products.push({ ...product, quantity: product.quantity });
      } else {
        let found = false
        for (let curProd of cart.products) {
          if(curProd.id === product.id) {
            curProd.quantity += product.quantity;
            found = true
            break
          }
        }
        if(!found) {
          cart.products.push({ ...product })
        }
      }
      console.log('PRODUCT', product)
      window.localStorage.setItem('cart', JSON.stringify(cart));
      dispatch(_addToCart(cart.products));
    }
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action.products)
      return [ ...action.products ]
    }
    default:
      return state
  }
}
