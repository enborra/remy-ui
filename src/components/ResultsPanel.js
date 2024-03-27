import React, { useEffect, useState } from "react";

import './ResultsPanel.css';


class ResultsPanel extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="results-panel">

        {this.props.content}

      </div>
    )
  }
}

export default ResultsPanel;
