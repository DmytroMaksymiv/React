import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
           <Header />
           <Tehnologies />
        </div>
    );
}

const Tehnologies = () => {
  return (
      <div>
        <ul>
          <li>css</li>
          <li>css</li>
          <li>css</li>
          <li>css</li>
        </ul>
      </div>

  );
}

const Header = () => {
    return (
        <div>
            <a>Home</a>
            <a>News</a>
            <a>Messages</a>
        </div>
    );
}

export default App;
