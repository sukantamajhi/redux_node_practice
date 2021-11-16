import { combineReducers } from "redux";
import loginReducer from "./Login/Reducer"
import signupReducer from "./Register/Reducer"
export default combineReducers({
	loginReducer,
	signupReducer
})