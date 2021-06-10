import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loadMovies} from '../store/actions/action';

function Movies () {

    const dispatch = useDispatch();
    const mymovies = useSelector(state => state.moviereducer);
    console.log("movies", mymovies);

    return(
        <div>
            <h2>Movies</h2>
            <ul>
                {mymovies &&mymovies.results &&mymovies.results.map(m => {
                    const date = m.release_date.split('-');
                    return <li key={m.title}>{m.title} ({date[0]})</li>
                })}
            </ul>
        </div>
    )
}

export default Movies;