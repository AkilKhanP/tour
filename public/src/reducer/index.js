
import { combineReducers } from "redux";
import {getFieledValues} from "./inputValues";
import {updateFieledValues} from "./inputValues";


const rootReducer =combineReducers({
    getFieledValues ,updateFieledValues
})
export default rootReducer