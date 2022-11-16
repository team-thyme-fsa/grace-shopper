import axios from 'axios';

/**
 * Action Types
 */

 const ADD_TO_CART = 'ADD_TO_CART';
 const UPDATE_QTY = 'UPDATE_QTY';
 const SET_CART = 'SET_CART';
 const REMOVE_ITEM = 'REMOVE_ITEM';


/**
 * Action Creators
 */
const _addToCart = (products) => ({ type: ADD_TO_CART, products });
const _updateQty = (products) => ({ type: UPDATE_QTY, products });
const _fetchCart = (products) => ({ type: SET_CART, products});
const _removeItem = (products) => ({ type: REMOVE_ITEM, products});
/**
 * Thunk Creators
 */
export const addToCart = (user, product) => {
  return async (dispatch) => {
    if (user.id) {
      const token = window.localStorage.getItem('token');
      const { data } = await axios.post(
        '/api/orders/addproduct',
        {
          userId: user.id,
          name: product.name,
          quantity: product.quantity,
          price: product.price,
          imageUrl: product.imageUrl,
        },
        {
          headers: {
            authorization: token,
          },
        },
      );
      dispatch(_addToCart(data));
    } else {
      let cart = window.localStorage.getItem('cart')
        ? JSON.parse(window.localStorage.getItem('cart'))
        : { products: [] };
      if (cart.products.length === 0) {
        cart.products.push({ ...product, quantity: product.quantity });
      } else {
        let found = false;
        for (let curProd of cart.products) {
          if (curProd.id === product.id) {
            curProd.quantity += product.quantity;
            found = true;
            break;
          }
        }
        if (!found) {
          cart.products.push({ ...product });
        }
      }
      console.log('PRODUCT', product);
      window.localStorage.setItem('cart', JSON.stringify(cart));
      dispatch(_addToCart(cart.products));
    }
  };
};

export const updateQty = (user, product) => {
  return async (dispatch) => {
    if(user.id) {
      const { data } = await axios.put(`/api/orders/${user.id}`, {
        userId: user.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        imageUrl: product.imageUrl,
        productId: product.productId
      });
      console.log(data)
      dispatch(_updateQty(data))
    }
  }
}

export const fetchCart = (user) => {
  return async (dispatch) => {
    if (user.id) {
      const { data } = await axios.get(`/api/orders/${user.id}`)
      dispatch(_fetchCart(data));
    } else {
      let cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : {products: []};
      window.localStorage.setItem('cart', JSON.stringify(cart));
      dispatch(_fetchCart(cart.products));
    }
  }
}

export const removeItem = (user, product) => {
  return async(dispatch) => {
    if(user.id) {
      console.log(product)
      // const { data } = await axios.delete(`/api/orders/${user.id}`, {
      //   product: product
      // });
      const { data } = await axios.delete(`/api/orders/${user.id}`, {
        product: product
      });
      dispatch(_removeItem(data))
    }
  }
}

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action.products);
      return [...action.products];
    }
    case UPDATE_QTY: {
      return [ ...action.products ]
    }
    case SET_CART: {
      return [ ...action.products ]
    }
    case REMOVE_ITEM: {
      return [ ...action.products ]
    }
    default:
      return state;
  }
}
