import axios from 'axios';

/*
 * Action Type
 */
const SET_ALL_POKEBALLS = 'SET_ALL_POKEBALLS';

/*
 * Action Creator
 */
const setAllPokeballs = (products) => ({ type: SET_ALL_POKEBALLS, products });

/*
 * Thunk Creator
 */
export const fetchAllPokeballs = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/pokeballs');
    dispatch(setAllPokeballs(data));
  };
};

/*
 * Initial State
 */
const initialState = {
  products: [],
};

export default function pokeballsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_POKEBALLS: {
      return { ...state, products: [...action.products] };
    }
    default: {
      return state;
    }
  }
}
