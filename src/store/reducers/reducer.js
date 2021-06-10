import * as actionTypes from '../actions/action';

const initialState = {
  loading: false,
  person: [],
  error: '',
};

// Actions which are defined in action.js are used by reducers to determined the changes.

const personReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.LOAD_PERSON_IN_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.LOAD_PERSON_SUCCESS: {
        console.log("action.payload",action.payload);
      return {
        ...state,
        loading: false,
        person: action.payload,
        error: '',
      };
    }
    case actionTypes.LOAD_PERSON_FAILURE: {
      return {
        ...state,
        loading: false,
        person: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default personReducer;