import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { gigReducer } from './gig.reducer.js'
import { userReducer } from './user.reducer.js'
import { reviewReducer } from './review.reducer'
import { orderReducer } from './order.reducer'
import { systemReducer } from './system.reducer'

const rootReducer = combineReducers({
    gigModule: gigReducer,
    userModule: userReducer,
    systemModule: systemReducer,
    reviewModule: reviewReducer,
    orderModule: orderReducer,
})

//wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
