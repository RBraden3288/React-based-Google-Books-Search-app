import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Saved from './pages/Saved';
import Search from './pages/Search';

import './App.css';

function App() {
  return (
    <div className="routes">
      <Router>
      <Route path="/" exact component={Search} />
      <Route path="/saved" exact component={Saved} />
      </Router>
    </div>
  );
}

export default App;
