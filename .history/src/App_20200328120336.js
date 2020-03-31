import React from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
