const initialState = {
	username: '',
	firstname: ''
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'

export function updateUser(user) {
	return {
		type: UPDATE_USER,
		payload: user
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
			const { username, firstname } = action.payload
			return { username, firstname }
		case CLEAR_USER:
			return { ...initialState }
		default:
			return state
	}
}

export default reducer
