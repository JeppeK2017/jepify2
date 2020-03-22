import React from 'react';
import hashtag from './images/jep.png';
import './css/App.css';
import { Jepifier } from './components/jepifier';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hashtag} className="App-logo" alt="logo" />
        <Jepifier />
      </header>
    </div>
  );
}
export default App;
