import React, { useEffect, useState } from "react";

import './ResultsPanel.css';

import HumanResponse from "./HumanResponse"
import LookupResponse from "./LookupResponse"


export function ResultsPanel(props){

  const [count, setCount] = useState();
  const content = 'THISISTHESID';
  
  var [humanResponse, setHumanResponse] = useState();
  var [lookupResponse, setLookupResponse] = useState();
  var responseType = '';
  var isHumanResponse = false;

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

        if( data.state == 'waiting_for_human' ){
          resp = 'Waiting for human response.';
          isHumanResponse = true;
          setLookupResponse('');
        
        } else if( data.state == 'completed'){

          if( data.results ){
            if( Array.isArray(data.results) ){
              if( data.results.length > 0 ){
                // resp = data.results[0].answer;
                isHumanResponse = false;
                setLookupResponse(data.results[0].answer);
                setHumanResponse('');
              }
            } else {
              isHumanResponse = true;
              setHumanResponse(data.results);
              resp = data.results;
            } 
          }
        }

        setCount(resp);
      });
  }

  return (
      <div className="results-panel">

        
        {count}

        {isHumanResponse ? <HumanResponse content={humanResponse} /> : <LookupResponse content={lookupResponse}/>}

      </div>
    )
}

export default ResultsPanel;
