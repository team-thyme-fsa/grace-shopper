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
        redirect('/checkout');
      } else {
        window.localStorage.clear();
        // const cart = JSON.parse(window.localStorage.getItem('cart'));
        // window.localStorage.setItem('cart',JSON.stringify({}))
        redirect('/checkout');
      }
    } catch (error) {
      console.log(error);
    }
  };
};

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
