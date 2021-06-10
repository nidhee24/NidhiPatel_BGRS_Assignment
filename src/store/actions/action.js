import axios from 'axios';
export const LOAD_PERSON_IN_PROGRESS = 'LOAD_PERSON_IN_PROGRESS';

//action creators for load character  
export const loadPersonInProgress = () => ({
  type: LOAD_PERSON_IN_PROGRESS,
});

export const LOAD_PERSON_SUCCESS = 'LOAD_PERSON_SUCCESS';

//action creators for checking if loading character succeed or not
export const loadPersonSuccess = (person) => ({
  type: LOAD_PERSON_SUCCESS,
  payload: person,
});

export const LOAD_PERSON_FAILURE = 'LOAD_PERSON_FAILURE';

//action creators for checking if loading character failed or not
export const loadPersonFailure = (error) => ({
  type: LOAD_PERSON_FAILURE,
  payload: error,
});

export const LOAD_PERSON_MOVIES = 'LOAD_PERSON_MOVIES';

//action creators for getting character's movies
export const loadPersonMovies = (movies) => ({
    type: LOAD_PERSON_MOVIES,
    payload: movies,
  });
//action creator to get an id of characters
export const SET_PERSON_ID = 'SET_PERSON_ID';
export const setpersonid = (id) => ({
    type: SET_PERSON_ID,
    payload: id,
  });

export const loadPerson = ()  => {
  
    return(dispatch) => {
        dispatch(loadPersonInProgress) // first of all loading for character
    const response = axios.get(
      `https://swapi.dev/api/people`) // fetch characters using axios.get from API
      .then(response => {
          console.log("response",response);
          const people = response.data
          dispatch(loadPersonSuccess(people)) // dispatch success method if the data loads successfully
      })
      .catch(error => {
          const errorMsg = error.message
          dispatch(loadPersonFailure(errorMsg)) // Failure if data didn't fetch properly
      })
  }
};

export const loadMovies = (movie) => {
    return dispatch => 
    Promise.all(movie.map(movie =>  // fetched whole array of movie using Promise.all()
        fetch(movie)
        .then(res => res.json())))
        .then(cmovies => 
            dispatch(loadPersonMovies(cmovies)));
}

