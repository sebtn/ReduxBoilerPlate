import axios from 'axios'
let redux = require('redux')

'use strict'
/*------------------------------------------------------*/
let nameReducer = (state = 'Anonymous', action) => {
	switch (action.type) {
		case "CHANGE_NAME":
			/*No spread operator because only manages one prop*/
			return action.name
		default: 			
			return state
	}	
}

/* Action Generator: Need to receive the args 
to make the dispatch, pass type as arg is not necessary */
let changeName = (name) => {
	return {
		type: "CHANGE_NAME",
		name: name
	}
}

/*------------------------------------------------------*/
let nextHobbyId = 1 
let hobbiesReducer = (state = [], action) => {
/*------------------------------------------------------*/
	switch (action.type) {
		case "ADD_HOBBY":
		/*No spread operator because only manages one prop
		state.hobbies does not exist anymore*/		
		return [
			/*old array*/
			...state,
			{
				id: nextHobbyId++,
				hobby: action.hobby
			}
		]
/*------------------------------------------------------*/
		case "REMOVE_HOBBY":
			return  state.filter( (hobby) => hobby.id !== action.id )
/*------------------------------------------------------*/
		default:
			return state
	}
}
/*Generators*/
/*------------------------------------------------------*/
let addHobby = (hobby) => {
	return {
		type: "ADD_HOBBY",
		hobby,
	}
}
/*------------------------------------------------------*/
let removeHobby = (id) => {
	return {
		type: "REMOVE_HOBBY",
		id,
	}
}

/*------------------------------------------------------*/
let nextMovieId = 1 
let moviesReducer = (state = [], action ) => {
/*------------------------------------------------------*/
	switch (action.type) {
		case "ADD_MOVIE":
		/*No spread operator because only manages one prop
		state.movies does not exist anymore*/
		return [
			/*old array*/
			...state,
			{
				id: nextMovieId++,
				title: action.title,
				genre: action.genre
			}
		]
/*------------------------------------------------------*/
		case "REMOVE_MOVIE":
			return state.filter( (movie) => movie.id !== action.id )
/*------------------------------------------------------*/
		default:
		return state			
	}
}
/*Generators*/
/*------------------------------------------------------*/
let addMovie = (title, genre) => {
	return {
		type: "ADD_MOVIE",
		title,
		genre,
	}
}
/*------------------------------------------------------*/
let removeMovie = (id) => {
	return {
		type: "REMOVE_MOVIE",
		id,
	}
}

/*------------------------------------------------------*/
let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
	switch (action.type) {
/*------------------------------------------------------*/
		case "START_LOCATION_FETCH":
			return {
				isFetching: true,
				url: undefined
			}
/*------------------------------------------------------*/
		case "COMPLETE_LOCATION_FETCH":
			return {
				isFetching: false,
				url: action.url
			}
/*------------------------------------------------------*/
		default: 
			return state						
	}		
}

/*Generators*/
/*------------------------------------------------------*/
let startLocationFetch = () => {
	return {
		type: "START_LOCATION_FETCH"
	}
}

/*------------------------------------------------------*/
let completeLocationFetch = (url) => {
	return {
		type: "COMPLETE_LOCATION_FETCH",
		url
	}
}

/*------------------------------------------------------*/
let fetchLocation = () => {
	store.dispatch(startLocationFetch())

	axios.get("http://ipinfo.io").then( function (res)  {
		let location = res.data.loc
		let baseUrl = "https://maps.google.com?q="

		store.dispatch(completeLocationFetch(baseUrl + location))
	})
}
 
/*------------------------------------------------------*/
/*Combine reducers*/
let reducer = redux.combineReducers({
	/*Manage name with nameReducer*/
	name: nameReducer,
	/*Manage hobbies with hobbiesReducer*/
	hobbies: hobbiesReducer,
	/*Manage movies with moviesReducer*/
	movies: moviesReducer, 
	/*Manage map with mapReducer*/
	map: mapReducer
})

/*------------------------------------------------------*/
/*Middleware = add arg redux.compose*/
let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f 
))

/*------------------------------------------------------*/
/*Subscribe to changes to watch changes state using a call back 
will contain all dispatches made */
let unsubscribe =  store.subscribe( () => {
	let state = store.getState()

	// document.getElementById('root').innerHTML = state.name
	console.log('State Evolving:  ', store.getState())

	if (state.map.isFetching) {
		return document.getElementById('root').innerHTML = 'Loading ...'
	} else if (state.map.url) {
		return document.getElementById('root').innerHTML = 
			'<a href=" '+ state.map.url + '" target="blank"> View Location in maps app</a>'	
	}

})
/* unsubscribe() => use it to reset the subscriptions */ 

/*------------------------------------------------------*/
fetchLocation()

/*------------------------------------------------------*/
let currentState = store.getState()
	// console.log('name is : ', currentState)

/*------------------------------------------------------*/
/*Cb dispatched into subscribe, cb are actions*/
store.dispatch(changeName("Seb is now the name"))
store.dispatch(addHobby( "Build machines" ))
store.dispatch(addHobby( "Not run" ))
store.dispatch(addMovie( "Favorite movie numero 1", "terror"))
store.dispatch(changeName("Seb is just awesome"))
store.dispatch(addHobby( "Build helicopters" ))
store.dispatch(addMovie( "Batman 2", "ficion asion" ))
/*remove hobby*/
store.dispatch(removeHobby(2))
/*Remove movie*/
store.dispatch(removeMovie(1))
