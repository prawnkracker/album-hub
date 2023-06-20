import React from 'react';
import Home from './Home';
import AlbumList from './AlbumList';
import { Switch, Route } from "react-router-dom"
import NavBar from './NavBar';
import NewAlbumForm from './NewAlbumForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/albumlist'>
            <AlbumList />
        </Route>
        <Route path='/newalbum'>
            <NewAlbumForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
