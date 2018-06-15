import axios from 'axios';
export const UPDATE_USER = 'user:updateUser';
export const SHOW_ERROR = 'user:ShowError';
export const API_LOADING = 'user:ApiLoading';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function apiLoading(){
    return {
        type: API_LOADING,
        payload: {
            user: 'Loading....'
        }
    }
}

export function showError(){
    return {
        type: SHOW_ERROR,
        payload: {
            user: 'Erroror'
        }
    }
}

export function apiRequest() {
    return dispatch => {
        dispatch(apiLoading());
        setTimeout(() => {
            axios.get(`http://www.omdbapi.com/?s=&apikey=e9ea2bdf`)
        .then(res => (res.data.Response === 'True' ) ? console.log(res.data) : dispatch(showError()))
        }, 2000);
        
    }
}