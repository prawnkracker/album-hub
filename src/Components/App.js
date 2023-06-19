import React from 'react';
import Home from './Home';
import AlbumList from './AlbumList';
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/albumlist'>
            <AlbumList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
