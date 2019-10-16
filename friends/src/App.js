import React from 'react';
import { Route, Switch } from 'react-router-dom'; 

import Login from './components/Login'; 
import Dashboard from './components/Dashboard'; 
import Nav from './components/Nav'; 
import PrivateRoute from './components/PrivateRoute';



import './App.css';

function App() {
  return (
    <div className="App">

      <h1> Welcome to Friends!</h1> 
      <Nav/>
      

      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/home" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
