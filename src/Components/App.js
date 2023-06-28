import React, { useState, useEffect } from 'react';
import Home from './Home';
import AlbumList from './AlbumList';
import { Switch, Route } from "react-router-dom"
import NavBar from './NavBar';
import NewAlbumForm from './NewAlbumForm';

function App() {

  const [albums, setAlbums] = useState([])
    const [filter, setFilter] = useState('')
    const [albumName, setAlbumName] = useState('')
    const [image, setImage] = useState('')
    const [artist, setArtist] = useState('')
    const [runtime, setRuntime] = useState('')
    const [genre, setGenre] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/albums')
        .then((r) => r.json())
        .then((data) => setAlbums(data))
    }, [])
    
    function onFilterChange(event){
        setFilter(event.target.value)
    }
    
    const albumsToDisplay = albums.filter((album) => {
        if (filter === '') return true;

        return (
            album.genre.toLowerCase().includes(filter.toLowerCase())
        )
    })

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/albumlist'>
            <AlbumList albumsToDisplay={albumsToDisplay} onFilterChange={onFilterChange} />
        </Route>
        <Route path='/newalbum'>
            <NewAlbumForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
