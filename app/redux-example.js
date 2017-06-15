let redux = require('redux')
import axios from 'axios'

// let actions = require('./actions/index')
import { changeName, addMovie, addHobby, removeHobby, 
	removeMovie, startLocationFetch, completeLocationFetch } from './actions/index'
let store = require('./store/configureStore').configure()
// import configure, {store} from '/home/seb/Sites/ReduxBoilerPlate/app/store/configureStore.js'
'use strict'


/*------------------------------------------------------*/
/*Subscribe to changes to watch changes state using a call back 
will contain all dispatches made */
let unsubscribe =  store.subscribe( () => {
	let state = store.getState()

	// document.getElementById('root').innerHTML = state.name
	// console.log('State Evolving:  ', store.getState())
	// console.log(fetchLocation())

	if (state.map.isFetching) {
		return document.getElementById('root').innerHTML = 'Loading ...'
	} else if (state.map.url) {
		return document.getElementById('root').innerHTML = 
			'<a href=" '+ state.map.url + '" target="blank"> View Location in maps app</a>'	
	}

})
/* unsubscribe() => use it to reset the subscriptions */ 

/*------------------------------------------------------*/

let fetchLocation = () => {

		store.dispatch(startLocationFetch())

		axios.get("http://ipinfo.io").then( function (res)  {
			let location = res.data.loc
			let baseUrl = "https://maps.google.com?q="

			store.dispatch(completeLocationFetch(baseUrl + location))
		})		
}
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
