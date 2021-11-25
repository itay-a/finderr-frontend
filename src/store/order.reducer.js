const initialState = {
    orders:[],
}

export function orderReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_ORDERS':
            newState = { ...state, orders: action.orders }
            break
        case 'ORDER_GIG':
            newState = { ...state, orders:[...state.orders, action.order]}
            break
        default:
    }
    return newState
}