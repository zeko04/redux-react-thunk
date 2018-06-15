import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';


const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
})

const allStoreEnhancer = compose (
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(
    allReducers,
    {
    products: [{ name: 'Iphone'}],
    user: 'Zeko'
    },
    allStoreEnhancer
    
);

console.log(store.getState())

ReactDOM.render(
<Provider store={ store } >
<App aRandome="BlaBla" />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
