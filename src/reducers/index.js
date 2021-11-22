import { combineReducers } from "redux";
import countReducer from './countReducer';
import movieListReducer from './movieListReducer';
import fetchMovieDetailsReducer from './movieDetailsReducer';

export default combineReducers({
    count: countReducer,
    fetchMovie: movieListReducer,
    movieDetail: fetchMovieDetailsReducer,
})