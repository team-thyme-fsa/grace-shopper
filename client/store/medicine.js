import axios from 'axios';

/*
 * Action Type
 */
const SET_ALL_MED = 'SET_ALL_MED';

/*
 * Action Creator
 */
const setAllMed = (medicines) => ({ type: SET_ALL_MED, medicines });

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
  medicines: [],
};

export default function medicinesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_MED: {
      return { ...state, medicines: [...action.medicines] };
    }
    default: {
      return state;
    }
  }
}
