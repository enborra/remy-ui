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

    <nav class="bg-white border-gray-200 dark:bg-black">
      <div class="max-w-4xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <div class="logo" alt="Objective" />
        </a>

        <div onClick={popMenu} id="dropdownInformationButton" class="menu-toggle"></div>
      </div>
    </nav>

    {isOpen && <Popup/>}

    </div>
  );
}

export default App;
