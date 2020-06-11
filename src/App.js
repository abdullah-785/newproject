import React from 'react';
import './App.css';
import Dinner from './dinner.js';
import Sweet from './sweet.js';

function App() {
  return(
  <div className="App">
    <Dinner disName="Chicken Karahi" sweetDis="Barayani"/>
    <Sweet sweetoption="Gulab jaman"/>
  </div>
  );
}


export default App;
