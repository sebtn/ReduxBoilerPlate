let redux = require('redux')

let stateDefault = {
	name: 'Anonymous',
	hobbies: [],
	movies: []
}
let nextHobbyId = 1 
let nextMovieId = 1 

/*------------------------------------------------------*/
let reducer = (state = stateDefault, action) => {
	switch (action.type) {
/*------------------------------------------------------*/
		case "CHANGE_NAME":
			return {
				...state,
				name: action.name
			}		
/*------------------------------------------------------*/
			case "ADD_HOBBY":
			return {
				...state,
				hobbies: [
				...state.hobbies,
					{
						id: nextHobbyId++,
						hobby: action.hobby
					}
				]
			}
/*------------------------------------------------------*/
			case "REMOVE_HOBBY":
			return {
				...state,
				hobbies: state.hobbies.filter( (hobby) => hobby.id !== action.id )
			}
/*------------------------------------------------------*/
			case "ADD_MOVIE":
			return {
				...state,
				movies: [
					...state.movies,
					{
						id: nextMovieId++,
						title: action.title,
						genre: action.genre
					}
				]
			}
/*------------------------------------------------------*/
			case "REMOVE_MOVIE":
			return {
				...state,
				movies: state.movies.filter( (movie) => movie.id !== action.id )
			}
/*------------------------------------------------------*/
		default: 
			return state
	}
/*------------------------------------------------------*/
}

/*------------------------------------------------------*/
/*Middleware = redux.compose*/
let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f 
))

/*------------------------------------------------------*/
/*Subscribe to changes to watch changes state using a cb
state.name will contain both dispatches made */
let unsubscribe =  store.subscribe( () => {
	let state = store.getState()

	document.getElementById('root').innerHTML = state.name

	console.log('Did something changed? ', store.getState())
})
/* unsubscribe() => use it to reset the subscriptions */ 

/*------------------------------------------------------*/
let currentState = store.getState()
	console.log('name is : ', currentState)

/*------------------------------------------------------*/
/*Cb fires into subscribe*/
store.dispatch({
	type: "CHANGE_NAME",
	name: "Seb"
})

store.dispatch({
	type: "ADD_HOBBY",
	hobby: "Build machines"
})

store.dispatch({
	type: "ADD_HOBBY",
	hobby: "Not run"
})

/*remove hobby*/
store.dispatch({
	type: "REMOVE_HOBBY",
	id: 2
})

store.dispatch({
	type: "ADD_MOVIE",
	title: "Favorite movie numero 1",
	genre: "terror"
})

store.dispatch({
	type: "CHANGE_NAME",
	name: "Seb -is-too-good"
})

store.dispatch({
	type: "ADD_HOBBY",
	hobby: "Build helicopters"
})

store.dispatch({
	type: "ADD_MOVIE",
	title: "Batman 2",
	genre: "ficion asion"
})

store.dispatch({
	type: "REMOVE_MOVIE",
	id: 1
})
