import React from 'react';
import './App.css';
import { Game } from './components/Game Page/Game Page';
import { Menu } from './components/MenuPage/MenuPage';



function App() {
  return (
    <div className="App" >
      <Menu />
      <Game />
    </div>
  );
}

export default App;
