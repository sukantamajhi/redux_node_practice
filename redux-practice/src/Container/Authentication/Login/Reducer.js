import * as types from "../../../redux/ActionTypes"

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	user: {},
	error: {},
}

export default function Reducer(state = initialState, action) {
	switch (action.type) {
		case types.userReducer.LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null,
			}
		case types.userReducer.LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				user: action.payload,
				error: null,
			}
		case types.userReducer.LOGIN_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			}
		default:
			return state
	}
}
