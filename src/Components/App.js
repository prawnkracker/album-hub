import React, { useState, useEffect } from 'react';
import Home from './Home';
import AlbumList from './AlbumList';
import { Switch, Route } from "react-router-dom"
import NavBar from './NavBar';
import NewAlbumForm from './NewAlbumForm';
import Favorites from './Favorites'

function App() {

  const [albums, setAlbums] = useState([])
  const [filter, setFilter] = useState('')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/favorites')
    .then((r) => r.json())
    .then((albums) => setFavorites(albums))
  }, [])
  
  function addAlbumToFavorites(album){
    setFavorites([...favorites, album])
  }

  function removeFromFavorite(id){
    const updatedFavorites = favorites.filter((album) => album.id !== id)
    setFavorites(updatedFavorites)
  }

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

    const favoritesToDisplay = favorites.filter((album) => {
      if (filter === '') return true;

        return (
            album.genre.toLowerCase().includes(filter.toLowerCase())
        ) 
    })

    function addAlbum(newAlbum){
      setAlbums([...albums, newAlbum])
    }
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route path='/albumlist'>
            <AlbumList albumsToDisplay={albumsToDisplay} onFilterChange={onFilterChange} onFavoriteClick={addAlbumToFavorites}  favorites={favorites}/>
        </Route>
        <Route path='/newalbum'>
            <NewAlbumForm onAddAlbum={addAlbum}/>
        </Route>
        <Route path='/favorites'>
          <Favorites favorites={favoritesToDisplay} onRemoveFromFavorites={removeFromFavorite} onFilterChange={onFilterChange}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
