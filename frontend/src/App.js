import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Routes from './Routes';
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <main>
      <Routes />
      </main>
    </div>
  );
}

export default App;