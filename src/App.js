/* 
    File: App.js
    Name: Manuel Carl Jr. Toleran
    ID: 301341708
    Date: January 28, 2024
*/

import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';

//App function
function App() {
  return (
    //div for App
    <div className="App">
      {/* <Router> */}
        <MainRouter/>
      {/* </Router> */}
    </div>
  );
}

export default App;
