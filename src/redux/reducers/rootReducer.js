import { combineReducers } from "redux";
import productReducer from "./productReducer";
import { filterReducer } from "./filterReducer";


const rootReducer = combineReducers({
    product: productReducer,
    filtter: filterReducer,
})

export default rootReducer;