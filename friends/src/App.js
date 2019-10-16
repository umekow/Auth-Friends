import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'; 

import Login from './components/Login'; 
import Dashboard from './components/Dashboard'; 

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Welcome to Friends!</h1> 
      <Login/>
    </div>
  );
}

export default App;
