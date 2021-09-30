import React, { createContext, useEffect } from 'react';
import { useHistory } from 'react-router';

const Context = createContext();

function GlobalProvider({ children }) {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { pathname } = history.location;

    if (!user && pathname !== '/register') {
      return history.push('/login');
    } 
  }, [history])

  return (
    <Context.Provider>
      { children }
    </Context.Provider>
  )
}

export default GlobalProvider;