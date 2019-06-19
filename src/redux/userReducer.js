const initialState = {
	username: '',
	firstname: ''
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'

export function updateUser(username) {
	return {
		type: UPDATE_USER,
		payload: username
	}
}

export function clearUser() {
	return {
		type: CLEAR_USER
	}
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_USER:
			return {username:action.payload}
		case CLEAR_USER:
			return { ...initialState }
		default:
			return state
	}
}

export default reducer
