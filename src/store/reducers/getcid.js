import * as actionTypes from '../actions/action';

const initialState = 0;
// This reducer calls action SET_PERSON_ID for getting index and id of characters
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PERSON_ID:{
      return{
       ...state,
      id:action.payload,
    };}
    default:
      return state;
  }
};