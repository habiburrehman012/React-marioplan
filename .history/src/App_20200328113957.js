import React from 'react';
import Navbar from './layout/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome</h1>
      </div>
    </Router>
  );
}

export default App;
