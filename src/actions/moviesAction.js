import axios from 'axios';
export const FETCHING_MOVIES = "movies:FetchingMovies";
export const MOVIES_LIST = "movies:MoviesList";
export const LOADING_MOVIES = "movies:LoadingMovies";
export const ERROR = "movies:Error";

export function loadingMovies(){
    return {
        type: LOADING_MOVIES,
        payload: {
            massage: 'Loading...',
            movies: []
        }
    }
}

export function showError(error){
    console.log(error)
    return {
        type: ERROR,
        payload: {
            massage: error,
            movies: []
        }
    }
}

export function moviesList(movies){
    return {
        type: MOVIES_LIST,
        payload: {
            massage: '',
            movies
        }
    }
}

export function fetchingMovies(movie){
    return dispatch => {
        dispatch(loadingMovies());

        axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=e9ea2bdf`)
        .then(res => (res.data.Response === 'True' ) ? dispatch(moviesList(res.data.Search)) : dispatch(showError(res.data.Error)))
    }
}