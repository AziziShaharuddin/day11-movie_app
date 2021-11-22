import * as data from '../types';

const defaultState = () => ({
    isLoading: false,
    data: {},
    error: null,
})

const movieListReducer = (state,action) => {
    if (state === undefined){
        return defaultState();
    }

    switch(action.type){
        case data.FETCH_MOVIE:
            return{
                isLoading: true,
                data: {},
                error: null,
            }
        case data.FETCH_MOVIE_SUCCESS:
            return{
                isLoading: false,
                data: action.payload,
                error: null,
            }
        case data.FETCH_MOVIE_FAIL:
            return{
                isLoading: false,
                data: {},
                error: action.error
            }
        default:
            return state;
    }
}

export default movieListReducer;