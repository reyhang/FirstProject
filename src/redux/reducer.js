import { combineReducers } from "redux";
import {systemReducer} from "./system/reducer"


const rootReducer = combineReducers({
    system: systemReducer || (()=> null),
})

export {rootReducer}