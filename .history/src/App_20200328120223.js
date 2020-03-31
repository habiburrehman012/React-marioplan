import React from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
