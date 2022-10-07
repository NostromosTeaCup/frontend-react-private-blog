import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Overview from './pages/Overview/Overview';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import BlogPost from './pages/BlogPost/BlogPost'


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <div>
      Maak hier jouw prachtige blog-applicatie!
    </div>
  );
}

export default App;
