import productsReducer from './productsReducer';
import userReducer from './userReducer';
import moviesReducer from './movieReducer';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer,
    movies: moviesReducer
})