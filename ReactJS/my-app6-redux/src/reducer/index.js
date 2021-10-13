let defultState={
    users:["MURALI","DANIEL","JERMAIN"]
}

export default function rootReducer(state=defultState,action) {
    switch (action.type) {
        case "GET_ALL_USERS":
            return state
                 
        default:
            return state
    }
    
}