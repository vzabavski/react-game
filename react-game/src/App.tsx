import React from 'react';
import './App.css';
import { Game } from './components/Game Page/Game Page';
import { Menu } from './components/MenuPage/MenuPage';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App" >
      <Router>
        <Route path='/' component={Menu} exact />
        <Route path='/game' component={Game} />
      </Router>
    </div>
  );
}

export default App;
