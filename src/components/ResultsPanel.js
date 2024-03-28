import React, { useEffect, useState } from "react";

import './ResultsPanel.css';


export function ResultsPanel(props){

  const [count, setCount] = useState(0);
  const content = 'THISISTHESID';

  useEffect(() => {
    const interval = setInterval(() => {
      poll();
    }, 1000);

    return () => clearInterval(interval);
  });

  const poll = () => {
    console.log('Result Panel polling!');

    var u = 'https://hackathon-2024-cmd-k-dc02368c323c.herokuapp.com/search/'+props.sid;

    fetch(u,{
      method: 'GET',
      headers: {'Content-Type': 'application/json' },
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => {
        var resp = '';

        if( data.state != 'completed' ){
          resp = resp + data.state;  
        }

        if( data.results ){
          if( data.results.length > 0 ){
            resp = resp + ' ' + data.results[0].answer;
          }
        }

        setCount(resp);

        console.log('response from poll:');
      });
  }

  // constructor(props){
  //   super(props);

  //   console.log('results panel:');
  //   this.sid = this.props.content;

  //   // this.startPolling();  
  // }

  // startPolling(sid){
  //   this.sid = sid;
  //   const timer = setInterval(this.pollForResults, 2000);

  // }

  // pollForResults(){
  //   console.log( 'polling server for results..');

  //   var u = 'https://hackathon-2024-cmd-k-dc02368c323c.herokuapp.com/search/'+this.sid;

  //   fetch(u,{
  //     method: 'GET',
  //     headers: {'Content-Type': 'application/json' },
  //     mode: 'cors'
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('response from poll:');
  //       console.log(data);
  //     });
  // }

  // render(){
  //   return (
  //     <div className="results-panel">

  //       {this.sid}

  //     </div>
  //   )
  // }

  return (
      <div className="results-panel">

        {count}

      </div>
    )
}

export default ResultsPanel;
