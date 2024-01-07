import './App.css';
import React, { useState } from "react";

import Title from './Title.js';
import Header from './Header';
import Board from './Board/index.js';

function App() {

  return (
    <div className="App">
      <Header/>
      <Title/>
      <Board/>
    </div>
  );
}

export default App;
