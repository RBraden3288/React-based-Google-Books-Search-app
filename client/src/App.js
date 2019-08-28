import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './pages/Search';

function App() {
  return (
    <div className="routes">
      <Router>
      <Route path="/" exact component={Search} />
      </Router>
    </div>
  );
}

export default App;
