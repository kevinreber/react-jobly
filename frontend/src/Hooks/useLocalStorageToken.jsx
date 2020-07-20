import { useState, useEffect } from "react";

function useLocalStorageToken() {
  const initialToken = localStorage.getItem('jobly-token') || null;
  const [token, setToken] = useState(initialToken);

  useEffect(function setTokenLocalStorage() {
    if (token === null) {
      localStorage.removeItem('jobly-token');
    } else {
      localStorage.setItem('jobly-token', token);
    }
  }, [token])

  return [token, setToken];
}

export default useLocalStorageToken;