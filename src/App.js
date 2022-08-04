import logo from './logo.svg';
import './App.css';
import Login from './components/Loginpage/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import React from 'react';
import Allotments from './components/Allotments/Allotments';


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>
         <Route> 
          
          <div className='app'>
          <Sidebar />
            <Route path='/home'>
            
            <Dashboard />
            </Route>
            <Route path="/allotment">
              <Allotments/>
            </Route>
          </div>
        </Route> 
      </Switch>

    </Router>





  );
}

export default App;
