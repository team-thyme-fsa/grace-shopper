import axios from 'axios';

/*
 * Action Type
 */
const SET_ALL_MED = 'SET_ALL_MED';

/*
 * Action Creator
 */
const setAllMed = (medicines) => ({ type: SET_ALL_MED, medicines });
