import React, { useState } from 'react';
import { decode } from "jsonwebtoken";
import NavBar from './Components/NavBar';
import Routes from './Routes';
import JoblyApi from './JoblyApi';
import UserContext from './Components/UserContext';
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  /** Check if user is logged in */
  async function getCurrentUser(){
    const token = localStorage.getItem('jobly-token');
    let user;
    try{
      let { username } = decode(token);
      console.log(username);
      user = await JoblyApi.getCurrentUserData(username);
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
    <UserContext.Provider value={currentUser}>
      <div className="App">
        <NavBar handleLogout={handleLogout} />
        <Routes getCurrentUser={getCurrentUser} />
      </div>
    </UserContext.Provider>
  );
}

export default App;