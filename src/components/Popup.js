import React, { useEffect, useState } from "react";
import ResultsPanel from "./ResultsPanel"

import './Popup.css';


class Popup extends React.Component {

	

	constructor(props){
		super(props);

		this.isOpen = false;
		this.timeout = 0;
		this.resultContent = '';
	}

	doThing(q){
		console.log('asdf');
		console.log(q);
		this.isOpen = true;

		var u = 'https://hackathon-2024-cmd-k-dc02368c323c.herokuapp.com/search';

		fetch(u,{
			method: 'POST',
			headers: {'Content-Type': 'application/json' },
			mode: 'cors',
			body: JSON.stringify({'query':q})
		})
			.then(response => response.json())
			.then(data => {
				this.setState({ resultContent: data.search_id })
				this.search_id = data.search_id;

				console.log(this.search_id);
			})
			.catch((error) => {
				console.log(error);
			})

	}

	doSearch(evt){
		var searchText = evt.target.value;

		if( this.timeout ) clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			this.doThing(evt.target.value);
		}, 300);
	}

	render(){
		return (
			<div className="popup">
				<div class="spacer"></div>
				<input type="text" className="search-box" onChange={evt => this.doSearch(evt)}></input>

				{this.isOpen && <ResultsPanel content={this.search_id}/>}
			</div>
		)
	}
}

export default Popup