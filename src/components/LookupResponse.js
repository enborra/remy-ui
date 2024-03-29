import React, { useEffect, useState } from "react";

import './LookupResponse.css';


class LookupResponse extends React.Component {

	constructor(props){
		super(props);
	}


	render(){
		return (
			<div className="LookupResponse">
				{this.props.content}
			</div>
		)
	}

}

export default LookupResponse