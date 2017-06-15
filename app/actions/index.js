
/* Action Generator: Need to receive the args 
to make the dispatch, pass type as arg is not necessary */
export let changeName = (name) => {
	return {
		type: "CHANGE_NAME",
		name: name
	}
}

/*hobby Action Generators*/
/*------------------------------------------------------*/
export let addHobby = (hobby) => {
	return {
		type: "ADD_HOBBY",
		hobby,
	}
}

/*------------------------------------------------------*/
export let removeHobby = (id) => {
	return {
		type: "REMOVE_HOBBY",
		id,
	}
}

/*Movie Action Generators*/
/*------------------------------------------------------*/
export let addMovie = (title, genre) => {
	return {
		type: "ADD_MOVIE",
		title,
		genre,
	}
}
/*------------------------------------------------------*/
export let removeMovie = (id) => {
	return {
		type: "REMOVE_MOVIE",
		id,
	}
}

/*Map Action Generators*/
/*------------------------------------------------------*/
export let startLocationFetch = () => {
	return {
		type: "START_LOCATION_FETCH"
	}
}

/*------------------------------------------------------*/
export let completeLocationFetch = (url) => {
	return {
		type: "COMPLETE_LOCATION_FETCH",
		url
	}
}

/*------------------------------------------------------*/
// export let fetchLocation = () => {
// 	return (dispatch, getState) =>  {
// 		dispatch(startLocationFetch())

// 		axios.get("http://ipinfo.io").then( function (res)  {
// 			let location = res.data.loc
// 			let baseUrl = "https://maps.google.com?q="

// 			dispatch(completeLocationFetch(baseUrl + location))
// 		})		
// 	}
// }
 