let redux = require('redux')

console.log('Using redux here!')

let stateDefault = 	{
		searchText: '',
		showCompleted: false,
		todos: [],
}

let reducer = (state = stateDefault, action) => {
	switch (action.type) {
		case "CHANGE_SEARCHTEXT":
			return {
				...state,
				searchText: action.searchText
			}
		default: 
			return state
	}
}

/*Middleware devTools*/
let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

let unsubscribe = store.subscribe( () => {
	let state = store.getState()
	console.log('Before change: ', state.searchText)
	console.log('Before change: ', state)

	document.getElementById('root').innerHTML = state.searchText
})
/* unsubscribe() */

let currentState = store.getState()

store.dispatch({
	type: "CHANGE_SEARCHTEXT",
	searchText: "Some new text to search instead of empty string"
})
store.dispatch({
	type: "CHANGE_SEARCHTEXT",
	searchText: "Some new text to search yet again"
})
/*
console.log('after change: ', store.getState() )
 */
