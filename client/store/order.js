import axios from 'axios';
import history from '../history';

/**
 * Action Types
 */
// const SET_ORDER = 'SET_ORDER';
const CREATE_ORDER = 'CREATE_ORDER';
const PROCESS_ORDER = 'PROCESS_ORDER';

/**
 * Action Creators
 */
// const setOrder = (order) => ({ type: SET_ORDER, order });
const createdOrder = (order) => ({ type: CREATE_ORDER, order });
const processedOrder = (order) => ({ type: PROCESS_ORDER, order });

/**
 * Thunk Creators
 */
export const createOrder = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/orders', {
      userId: user.id,
      shippingInfo: user.address,
      billingInfo: user.address,
    });
    dispatch(createdOrder(data));
  };
};

export const processOrder = (userId) => {
  return async (dispatch) => {
    try {
      if (userId) {
        const { data } = await axios.put('/api/orders', { userId });
        dispatch(processedOrder(data));
      } else {
        window.localStorage.clear();
        // const cart = JSON.parse(window.localStorage.getItem('cart'));
        // window.localStorage.setItem('cart',JSON.stringify({}))
        redirect('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// export const fetchOrder = (user, product, quantity) => {
//   return async (dispatch) => {
//     console.log('User', user.id)
//     if (user.id) {
//       const { data } = await axios.post('/api/orders/addproduct', {
//         userId: user.id,
//         name: product.name,
//         quantity: quantity,
//       });
//       console.log(data)
//       dispatch(setOrder(data));
//     } else {
//       let cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : {products: []}

//       for (let curProd of cart.products) {
//         if(curProd.id === product.id) {
//           curProd.quantity += Number(quantity);
//           break
//         } else {
//           cart.products.push({ ...product, quantity: Number(quantity) });
//         }
//       }

//       window.localStorage.setItem('cart', JSON.stringify(cart));
//       dispatch(setOrder(cart.products));
//     }
//   }
// }

export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_ORDER: {
      return { ...action.order };
    }
    case PROCESS_ORDER: {
      return action.order;
    }
    // case SET_ORDER: {
    //   return { ...action.order };
    // }
    default:
      return state;
  }
}
