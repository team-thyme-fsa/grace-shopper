import axios from 'axios';
import history from '../history';

/**
 * Action Types
 */
const SET_ALL_PROD = 'SET_ALL_PROD';
const SET_PROD = 'SET_PROD';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

/**
 * Action Creators
 */
const setAllProd = (products) => ({ type: SET_ALL_PROD, products });
const setProd = (product) => ({ type: SET_PROD, product });
const updatedProduct = (product) => ({ type: UPDATE_PRODUCT, product });
const createdProduct = (product) => ({ type: CREATE_PRODUCT, product });
const deletedProduct = (product) => ({ type: DELETE_PRODUCT, product });

/**
 * Thunk Creators
 */
export const fetchAllProd = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');
    dispatch(setAllProd(data));
  };
};

export const fetchProd = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setProd(data));
  };
};

export const updateProduct = (id, product) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const { data } = await axios.put(
      `/api/admin/product/${id}`,
      { product },
      {
        headers: {
          authorization: token,
        },
      },
    );
    dispatch(updatedProduct(data));
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const { data } = await axios.post(
      `/api/admin/product/`,
      { product },
      {
        headers: {
          authorization: token,
        },
      },
    );
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem('token');
    const { data } = await axios.delete(`/api/admin/product/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(deletedProduct(data));
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
    case SET_PROD: {
      return { ...state, product: { ...action.product } };
    }
    case UPDATE_PRODUCT: {
      return { ...state, products: [...action.product] };
    }
    case CREATE_PRODUCT: {
      return { ...state, products: [...action.products] };
    }
    default: {
      return state;
    }
  }
}
