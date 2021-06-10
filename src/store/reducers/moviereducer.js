import * as actionTypes from '../actions/action';

const initialMovieState = {
    title:[],
};


const movieReducer = (state= initialMovieState, action) => {
    switch(action.type){
        case actionTypes.LOAD_PERSON_MOVIES:{
            return action.cmovies.sort((a,b) =>
                a.episode_id - b.episode_id
            );
            
        }
        default:
            return state;
    }
};

export default movieReducer;