import React, { useEffect, useState } from "react";

import './HumanResponse.css';


class HumanResponse extends React.Component {

	constructor(props){
		super(props);
	}


	render(){
		return (
			<div className="HumanResponse">
				{this.props.content}
			</div>
		)
	}

}

export default HumanResponse