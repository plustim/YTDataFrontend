import axios from "axios";

export default {
	/* retrieve data based on query params */
	// this one is just for testing. remove this before production. get is annoyingly limited, so we'll use post
	getData: data =>
		axios.get("https://jsonplaceholder.typicode.com/todos/1")
	,
	/* using a post request to get data based on query */
	getDataPost: data => 
		axios.post("PUT PATH TO API ROUTE HERE", data)
};