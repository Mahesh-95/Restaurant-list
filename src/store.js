import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {restaurantListReducer} from './reducers/restaurantReducer';

const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
    restaurantList: restaurantListReducer
})

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;