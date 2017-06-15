import {nameReducer, hobbiesReducer, moviesReducer, mapReducer} from  './../reducers/index'
let redux = require('redux')
// import {nameReducer, hobbiesReducer, moviesReducer, mapReducer} from ' ./../reducers/index'
// let thunk = require('redux-thunk').default
import thunk from 'redux-thunk'

 export let configure = () => { 
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
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f 
	))

	return store
}
