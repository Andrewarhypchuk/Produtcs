import {combineReducers, createStore} from "redux";
import ProductReducer from "./ProductReducer";

let reducers = combineReducers({
    products:ProductReducer
})
let store = createStore(reducers);
window.store = store;
export default store;

