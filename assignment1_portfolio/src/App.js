import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';


function App() {
  return (
    <div className="App">
      <Router>
        <MainRouter/>
      </Router>
    </div>
  );
}

export default App;
