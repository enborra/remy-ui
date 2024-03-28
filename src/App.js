import React, { useEffect, useState } from "react";
import Popup from "./components/Popup"

import './App.css';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);

  function toggle(){
    setIsOpen((isOpen) => !isOpen);
  }

  const popMenu = (e) => {
    e.preventDefault();
    toggle();
  }


  return (
    <div className="App">

        <nav class="">
          <div class="flex flex-wrap items-center justify-between">
            <a class="flex items-center space-x-3 rtl:space-x-reverse">
                <div class="logo" alt="Objective" />
            </a>
            <Popup/>
          </div>

          <div class="breaker"></div>
        </nav>

    </div>
  );
}

export default App;
