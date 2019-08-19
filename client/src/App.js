import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Saved from './pages/Saved';
import Search from './pages/Search';

import './App.css';

function App() {
  return (
    <div className="routes">
      <Router>
      <Route path="/" exact component={Saved} />
      <Route path="/search" exact component={Search} />
      </Router>
    </div>
  );
}

export default App;
