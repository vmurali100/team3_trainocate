var json = require('./products.json');

let defaultState = {
    products: json
};

export default function rootReducer( state = defaultState, action ) {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return state;
            
        default:
            return state;
    }
}