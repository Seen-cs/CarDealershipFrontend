//tum stateleri topladığım yer
import {combineReducers} from "redux";
import authReducer from "./reducers/AuthReducer";


const rootReducer = combineReducers({
    auth: authReducer
    
})
export default rootReducer;