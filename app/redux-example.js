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
/*Middleware = redux.compose*/
let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f 
))

/*Subscribe to changes to watch changes state using a cb
state.name will contain both dispatches made */
let unsubscribe =  store.subscribe( () => {
	let state = store.getState()
	console.log('name is : ', state.name)
	console.log('name is : ', state)

	document.getElementById('root').innerHTML = state.name
})
/* unsubscribe() => use it to reset the subscriptions */ 

let currentState = store.getState()
	// console.log('name is : ', currentState)

store.dispatch({
	type: "CHANGE_NAME",
	name: "Seb"
})
store.dispatch({
	type: "CHANGE_NAME",
	name: "Seb -is-too-good"
})

