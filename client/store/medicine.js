import axios from 'axios';

/*
 * Action Type
 */
const SET_ALL_MED = 'SET_ALL_MED';

/*
 * Action Creator
 */
const setAllMed = (products) => ({ type: SET_ALL_MED, products });

/*
 * Thunk Creator
 */
export const fetchAllMed = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/medicine');
    dispatch(setAllMed(data));
  };
};

/*
 * Initial State
 */
const initialState = {
  products: [],
};

export default function medicinesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_MED: {
      return { ...state, products: [...action.products] };
    }
    default: {
      return state;
    }
  }
}
