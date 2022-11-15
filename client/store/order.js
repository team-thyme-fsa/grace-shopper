import axios from 'axios';
import history from '../history';

/**
 * Action Types
 */
const SET_ORDER = 'SET_ORDER';
const CREATE_ORDER = 'CREATE_ORDER';

/**
 * Action Creators
 */
const setOrder = (order) => ({ type: SET_ORDER, order });
const createdOrder = (order) => ({ type: CREATE_ORDER, order });

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

export const fetchOrder = (user, product) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/orders/addproduct', {
      userId: user.id,
      name: product.name,
      // Product should have quanitity property
      quantity: product.quantity,
    });
    dispatch(setOrder(data));
  };
};

export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_ORDER: {
      return { ...action.order };
    }
    case SET_ORDER: {
      return { ...action.order };
    }
    default:
      return state;
  }
}
