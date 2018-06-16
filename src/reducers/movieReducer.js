import { FETCHING_MOVIES, LOADING_MOVIES, ERROR, MOVIES_LIST } from '../actions/moviesAction';

let initialState = {
    products: [{name: 'Iphone'}],
    user: 'Zeko',
    movies: {
        massage: 'Loading',
        movies: []
    }
}

export default function movieReducer( state = initialState, {type, payload}) {
    switch (type) {
        case ERROR:
            return payload;
        case MOVIES_LIST:
            return payload;
        default:
            return state;
    }
}