import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import DetailsCharacter from './pages/DetailCharacter';
import DetailComic from './pages/DetailComic';
import EditAccount from './pages/EditAccount';

import GlobalProvider from './providers/globalContext';

function App() {
  return (
    <GlobalProvider>
      <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/' component={Home} />
          <Route path='/character/:id' component={DetailsCharacter}/>
          <Route path='/comic/:id' component={DetailComic}/>
          <Route path="/edit" component={EditAccount} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
