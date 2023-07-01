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
  const [search, setSearch] = useState('')

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

    function onSearch(event){
      setSearch(event.target.value)
    }
    
    const albumsToDisplay = albums.filter((album) => {
        if (filter === '' && search === '') return true;

        return (
          (filter === '' || album.genre.toLowerCase().includes(filter.toLowerCase())) && 
          album.album.toLowerCase().includes(search.toLowerCase())
        );
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
        <Route exact path='/albumlist'>
            <AlbumList filter={filter} albumsToDisplay={albumsToDisplay} onFilterChange={onFilterChange} onFavoriteClick={addAlbumToFavorites}  favorites={favorites} onSearch={onSearch} search={search}/>
        </Route>
        <Route path='/albumlist/newalbum'>
            <NewAlbumForm onAddAlbum={addAlbum}/>
        </Route>
        <Route path='/favorites'>
          <Favorites filter={filter} favorites={favoritesToDisplay} onRemoveFromFavorites={removeFromFavorite} onFilterChange={onFilterChange} onSearch={onSearch} search={search}/>
        </Route>
      </Switch>
      <NavBar />
    </div>
  );
}

export default App;
