import React from 'react';
import './App.css';
import { Gamefield } from './components/Gamefield';

function App() {
  const keyboardMoves = (event:any) => {
    console.log(event.key)
  }
  React.useEffect(() => {
    window.addEventListener('keypress', keyboardMoves);
    return () => {
      window.removeEventListener('keypress', keyboardMoves)
    };
  }, [])
  
  return (
    <div className="App" >
     <Gamefield/>
    </div>
  );
}

export default App;
