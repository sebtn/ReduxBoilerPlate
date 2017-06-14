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

let store = redux.createStore(reducer)
let currentState = store.getState()
console.log('Before change: ', currentState)

store.dispatch({
	type: "CHANGE_SEARCHTEXT",
	searchText: "Some new text to search instead of empty string"
})
console.log('after change: ', store.getState() )
