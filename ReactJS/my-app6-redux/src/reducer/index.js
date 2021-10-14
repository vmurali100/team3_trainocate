let defaultState = {
    users: ["MURALI","DANIEL","JERMAINE"]
};

export default function rootReducer( state = defaultState, action ) {
    switch (action.type) {
        case "GET_ALL_USERS":
            return state;

        // case "DELETE_USER":
        //     return {...state, users:state.users.filter((user, i) => i !== action.payload)};

        // case "UPDATE_USER":
        //     return state;

        // case "CREATE_USER":
        //     return state;
            
        default:
            return state;
    }
}