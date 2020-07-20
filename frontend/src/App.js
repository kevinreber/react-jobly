import React, { useState, useEffect } from 'react';
import { decode } from "jsonwebtoken";
import NavBar from './Components/NavBar';
import Routes from './Routes';
import JoblyApi from './JoblyApi';
import useLocalStorageToken from './Hooks/useLocalStorageToken';
import UserContext from './Components/UserContext';
import './App.css';

function App() {

  const [ token, setToken ] = useLocalStorageToken();
  const [ currentUser, setCurrentUser ]  = useState(null);

  useEffect(function checkUserData() {

    /** Check if user is logged in */
    async function getCurrentUser(){
      if (token){
        try{
          let { username } = decode(token);
          
          /** Get User Data and store into state */
          let user = await JoblyApi.getCurrentUserData(username);
          setCurrentUser(user);
        } catch (error) {
          console.log(error);
          setCurrentUser(null);
        }
      }
    };

    getCurrentUser();
  }, [token, setToken])

  async function signup(data){
    try{
      /** store token from API response */
      const token = await JoblyApi.register(data);

      /** Store token into localStorage */
      setToken(token);

    } catch (errors) {
      return errors;
    }
  }

  async function login(data){
    try{
      /** store token from API response */
      const token = await JoblyApi.login(data);

      /** Store token into localStorage */
      setToken(token);

    } catch (errors) {
      return errors;
    }
  }

  function handleLogout(){
    setToken(null);
    setCurrentUser(null);
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <NavBar handleLogout={handleLogout} />
        <Routes signup={signup} login={login} />
      </div>
    </UserContext.Provider>
  );
}

export default App;