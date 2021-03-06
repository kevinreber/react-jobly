import React, { useState, useEffect } from 'react';
import { decode } from "jsonwebtoken";
import NavBar from './Components/navigation/NavBar';
import Routes from './routes/Routes';
import Api from './api/Api';
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
          let user = await Api.getCurrentUserData(username);
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
      const token = await Api.register(data);

      /** Store token into localStorage */
      setToken(token);
      return {success: true};

    } catch (errors) {
      console.error("signup failed", errors);
      return {success: false, errors}
    }
  }

  async function login(data){
    try{
      /** store token from API response */
      const token = await Api.login(data);

      /** Store token into localStorage */
      setToken(token);
      return {success: true};

    } catch (errors) {
      console.error("login failed", errors);
      return {success: false, errors}
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