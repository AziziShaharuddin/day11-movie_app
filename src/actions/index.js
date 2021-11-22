import axios from 'axios';
import * as key from '../types';

export const increase = () => (dispatch) => {
    dispatch({
        type: key.INCREASE,
        // payload:
    })
};

export const decrease = () => (dispatch) => {
    dispatch({
        type: key.DECREASE,
        // payload:
    })
};

export const fetchMovie = (data) => (dispatch) => {
    dispatch({type: key.FETCH_MOVIE, payload: data});
    try {
        axios.get(`https://www.omdbapi.com/?apikey=49f3bb53&s=${data}&page=1`)
        .then((result) => {
            if(result.status === 200 && result.data.Response === "True") {
                dispatch({
                    type: key.FETCH_MOVIE_SUCCESS,
                    payload: result.data
                })
            } else {
                alert(result.data.error)
            }
        })
        .catch((error) => {
            dispatch({type: key.FETCH_MOVIE_FAIL, error: "Error"});
        })
    }
    catch(error) {
        dispatch({
            type: key.FETCH_MOVIE_FAIL, 
            error: "Error"
        })
    }
};

export const fetchMovieDetails = (data) => (dispatch) => {
    dispatch({
        type: key.FETCH_MOVIE_DETAILS,
    })

    try{
        axios.get(`https://www.omdbapi.com/?apikey=49f3bb53&i=${data}`)
        .then((res)=>{
            // console.log("res...",res);
            if(res.status ===200){
                dispatch({
                    type: key.FETCH_MOVIE_DETAILS_SUCCESS,
                    payload: res.data,
                })
            }else{
                alert(res.data.Error)
            }
        }) 
        .catch((error)=>{
            // console.log("err 1....",error);
            dispatch({
                type: key.FETCH_MOVIE_DETAILS_FAIL,
                error: "Error"
            })
        })

    }catch(error){
        // console.log("err 2....", error);
        dispatch({
            type: key.FETCH_MOVIE_DETAILS_FAIL,
            error: "Error"
        })
    }
}