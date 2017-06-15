/*name reducer*/
export let nameReducer = (state = 'Anonymous', action) => {
	switch (action.type) {
		case "CHANGE_NAME":
			/*No spread operator because only manages one prop*/
			return action.name
		default: 			
			return state
	}	
}

/*Hobbies reducer*/
/*------------------------------------------------------*/
let nextHobbyId = 1 
export let hobbiesReducer = (state = [], action) => {
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

/*Movie reducer*/
/*------------------------------------------------------*/
let nextMovieId = 1 
export let moviesReducer = (state = [], action ) => {
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

/*Map reducer manging async -> isFetching flag indicates
obtaining some url*/
/*------------------------------------------------------*/
export let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
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