import { UPDATE_USER, SHOW_ERROR, API_LOADING } from '../actions/userActions'

export default function userReducer(state = '', { type, payload }){
    
    switch (type) {
        case API_LOADING:
            return payload.user
        case UPDATE_USER:
            return payload.user;
        case SHOW_ERROR:
            return payload.user;
        default:
            return state
    }
}