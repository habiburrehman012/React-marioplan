import React from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/project/:id' component={ProjectDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
