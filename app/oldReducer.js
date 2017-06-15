let stateDefault ={
	name: 'Anonymous',
	hobbies: [],
	movies: []
}

/*------------------------------------------------------*/
let oldReducer = (state = stateDefault, action) => {
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
}

/*------------------------------------------------------*/
/*Cb dispatched into subscribe, cb are actions*/
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

/*Remove movie*/
store.dispatch({
	type: "REMOVE_MOVIE",
	id: 1
})
