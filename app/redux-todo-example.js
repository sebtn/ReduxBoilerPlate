let redux = require('redux')

let stateDefault = 	{
		searchText: '',
		showCompleted: false,
		todos: [],
}

/* Reducer pure function */
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

/*Middleware: hooking devTools*/
let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

/*Check for changes*/
let unsubscribe = store.subscribe( () => {
/*	fetch current state */	
let state = store.getState()

/*-----------------------------------------------	
* console.log('Before change: ', state.searchText)
* console.log('Before change Object: ', state)
*-------------------------------------------------/

/*prints the last dispatch to screen */
	document.getElementById('root').innerHTML = state.searchText
})
/* unsubscribe() */

/*Dispatcher to reducer*/
store.dispatch({
	type: "CHANGE_SEARCHTEXT",
	searchText: "Some new text to search instead of empty string"
})
store.dispatch({
	type: "CHANGE_SEARCHTEXT",
	searchText: "Some new text to search yet again"
})
store.dispatch({
	type: "CHANGE_SEARCHTEXT",
	searchText: "Cat is nice"
})
store.dispatch({
	type: "CHANGE_SEARCHTEXT",
	searchText: "Coffee and cream sucks"
})

