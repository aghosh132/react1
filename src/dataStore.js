import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./restReducer/rReducer";

//create reducer
const reducer=combineReducers({
reducer1:restReducer

})
//create middleware redux -synchronus -middleware makes it asynchronus
const middleware=[thunk]

//create store

//                       reducer , middleware
const store =createStore(reducer,applyMiddleware(...middleware))



export default store