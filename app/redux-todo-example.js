let redux = require('redux')

console.log('Using redux here!')

let stateDefault = 	{
		searchText: '',
		showCompleted: false,
		todos: [],
}

let reducer = (state = stateDefault, action) => {
	return state
}

let store = redux.createStore(reducer)
let currentState = store.getState()

console.log('C-state: ', currentState )