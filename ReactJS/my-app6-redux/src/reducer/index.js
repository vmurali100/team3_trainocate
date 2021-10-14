import { CREATE_USER, DELETE_USER, EDIT_USER, GET_ALL_USERS, SHOW_CREATE, UPDATE_USER } from '../actions';
import products from './products.json';

console.log(products)
let defultState={
    users:[],
    products:products,
    commencts:[],
    details:[],
    isEdit:false,
    isCreate:false
}

export default function rootReducer(state=defultState,action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return {...state,users:action.payload}
        case DELETE_USER:
            return {...state,users:action.payload}   
        case EDIT_USER:
            return {...state,isEdit:action.payload}
        case CREATE_USER:
            return {...state,users:action.payload}
        case UPDATE_USER:
            return {...state,users:action.payload}
        case SHOW_CREATE:
            return {...state,isCreate:action.payload}
        default:
            return state
    }
    
}