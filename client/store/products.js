import axios from 'axios';
import history from '../history';

/**
 * Action Types
 */
const SET_ALL_PROD = 'SET_ALL_PROD';
const SET_PROD = 'SET_PROD';

/**
 * Action Creators
 */
const setAllProd = (products) => ({ type: SET_ALL_PROD, products });
const setProd = (product) => ({ type: SET_PROD, product})

/**
 * Thunk Creators
 */
export const fetchAllProd = () => {
  return async (dispatch) => {
    const { data } = axios.get('/api/products');
    dispatch(setAllProd(data));
  };
};

export const fetchProd = (id) => {
  return async (dispatch) => {;
    const { data } = axios.get(`/api/products/${id}`);
    dispatch(setProd(data));
  }
}

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
    case SET_PROD: {
      return { ...state, product: {...action.product} };
    }
    default: {
      return state;
    }
  }
}
