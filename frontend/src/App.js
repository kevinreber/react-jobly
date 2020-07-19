import React, { useState } from 'react';
import { decode } from "jsonwebtoken"
import NavBar from './Components/NavBar';
import Routes from './Routes';
import JoblyApi from './JoblyApi';
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  /** Check if user is logged in */
  async function getCurrentUser(){
    const token = localStorage.getItem('jobly-token');

    try{
      let { username } = decode(token);
      const user = await JoblyApi.getCurrentUser(username);
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    }
  }

function handleLogout(){
  localStorage.removeItem('jobly-token');
  setCurrentUser(null);
}

  return (
    <div className="App">
      <NavBar handleLogout={handleLogout} />
      <main>
      <Routes getCurrentUser={getCurrentUser} />
      </main>
    </div>
  );
}

export default App;