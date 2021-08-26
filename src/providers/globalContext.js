import React, { createContext, useEffect } from 'react';
import { useHistory } from 'react-router';

const Context = createContext();

function GlobalProvider({ children }) {
    const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      return history.push('/login');
    } 
  }, [])

  return (
    <Context.Provider>
      { children }
    </Context.Provider>
  )
}

export default GlobalProvider;