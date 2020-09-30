import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './component/navbar';
import Home from './component/Home';
// import Project from './component/project';;

function App() {
  return (
    <div className="App">
      <div className = "main">
        <Navbar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
