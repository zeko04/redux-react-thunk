import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allReducers } from './reducers';

let initialState = {
    products: [{name: 'Iphone'}],
    user: 'Zeko',
    movies: {
        massage: 'Loading',
        movies: []
    }
}

const allStoreEnhancer = compose (
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)

export const store = createStore(
    allReducers,
    initialState,
    allStoreEnhancer
);