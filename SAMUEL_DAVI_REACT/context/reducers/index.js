import {combineReducers} from "redux"
import counterReducers from "./counterReducers";

const rootReducer = combineReducers({
    counter: counterReducers,
})

export default rootReducer;
