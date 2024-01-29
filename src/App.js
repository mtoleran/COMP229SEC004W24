/* 
    File: App.js
    Name: Manuel Carl Jr. Toleran
    ID: 301341708
    Date: January 28, 2024
*/

import React from 'react';
import { HashRouter } from 'react-router-dom';
import MainRouter from './MainRouter';

//App function
function App() {
  return (
    //div for App
    <div className="App">
      {/* Using HashRouter for github pages deployment */}
      <HashRouter>
        <MainRouter/>
      </HashRouter>
    </div>
  );
}

export default App;
