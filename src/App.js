import React, {Component} from 'react';
import './App.css';
import API from './API.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			selectHow: "views",
			selectWhen: "all",
			selectPer: "100",
			selectView: "graph",
			descending: false,
			data: "dataaa"
		}
	}

	/* makes query to api */
	sendQuery = () => {
		let queryObj = Object.assign({}, this.state);
		delete queryObj.data;
		API.getDataPost(queryObj)
		.then(res => {
			// stringifying data temporarily; this data will eventually be fed into a visualization component (so won't need to be a string)
			this.setState({data: JSON.stringify(res.data)});
		})
		.catch(console.log);
	}

	/* updates state based on change in select elements */
	handleChange = event => {
		let obj = {};
		obj[event.target.id] = event.target.value;
		this.setState(obj);
	}

	/* updates state based on change in (input)checkbox elements */
	handleCheck = event => {
		let obj = {};
		obj[event.target.id] = event.target.checked;
		this.setState(obj);
	}

	render = () =>
		<div className="App">
			<header className="App-header">
				name of this thing
			</header>
			<nav>
				<select id="selectHow" onChange={this.handleChange}>
					<option value="views">Views</option>
					<option value="likes">Thumbs Up</option>
					<option value="dislikes">Thumbs Down</option>
					<option value="ratio">Thumbs Ratio</option>
					<option value="comments">Comments</option>
				</select>
				<select id="selectWhen" onChange={this.handleChange}>
					<option value="all">All-time</option>
					<option value="s1">Season 1</option>
					<option value="s2">Season 2</option>
					<option value="s3">Season 3</option>
					<option value="s4">Season 4</option>
					<option value="s5">Season 5</option>
					<option value="s6">Season 6</option>
					<option value="s7">Season 7</option>
					<option value="s8">Season 8</option>
					<option value="s9">Season 9</option>
					<option value="s10">Season 10</option>
				</select>
				<select id="selectPer" onChange={this.handleChange}>
					<option value="100">100%</option>
					<option value="50">50%</option>
					<option value="10">10</option>
				</select>
				<select id="selectView" onChange={this.handleChange}>
					<option value="graph">Graph</option>
					<option value="list">List</option>
					<option value="pie">Pie Chart</option>
				</select>
				<label>
					<input type="checkbox" id="descending" onChange={this.handleCheck}></input>
					High to Low / Low to High
				</label>
				<button onClick={this.sendQuery}>
					send query
				</button>
			</nav>
			<section className="Data-section">
				{this.state.data}
			</section>
			<footer>
				<a
					className="App-link"
					href="https://ducksix.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					ducksix
				</a>
			</footer>
		</div>
}

export default App;