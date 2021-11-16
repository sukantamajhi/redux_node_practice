import * as types from "../../../redux/ActionTypes"

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	user: {},
	error: {},
}

export default function Reducer(state = initialState, action) {
	switch (action.type) {
		case types.userReducer.REGISTER_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null,
			}
		case types.userReducer.REGISTER_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				user: action.payload,
				error: null,
			}
		case types.userReducer.REGISTER_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			}
		default:
			return state
	}
}