import axios from 'axios';
import history from '../history';

/**
 * Action Types
 */
const SET_ALL_PROD = 'SET_ALL_PROD';

/**
 * Action Creators
 */
const setAllProd = (products) => ({ type: SET_ALL_PROD, products });

/**
 * Thunk Creators
 */
export const fetchAllProd = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');
    dispatch(setAllProd(data));
  };
};

/**
 * Initial State
 */
const initialState = {
  products: [],
  product: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_PROD: {
      return { ...state, products: [...action.products] };
    }
    default: {
      return state;
    }
  }
}
