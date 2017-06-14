let redux = require('redux')

let reducer = (state, action) => {
	state = state || { name: 'Anonymous' }

	switch (action.type) {
		case "CHANGE_NAME":
			return {
				...state,
				name: action.name
			}
	default: 
		return state
	}

}

let store = redux.createStore(reducer)
let currentState = store.getState()

console.log('Before change: ', currentState)

store.dispatch({
	type: "CHANGE_NAME",
	name: "Seb"
})
console.log('After change should change to Seb: ', store.getState() )