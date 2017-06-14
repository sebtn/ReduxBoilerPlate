let redux = require('redux')

let reducer = (state, action) => {
	state = state || { name: 'Anonymous' }
	return state
}

let store = redux.createStore(reducer)
let currentState = store.getState()

console.log('C State', currentState)
