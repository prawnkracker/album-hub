import React, { useState, useEffect } from 'react';
import Home from './Home';
import AlbumList from './AlbumList';
import { Switch, Route } from "react-router-dom"
import NavBar from './NavBar';
import NewAlbumForm from './NewAlbumForm';

function App() {

  const [albums, setAlbums] = useState([])
  const [filter, setFilter] = useState('')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/albums')
    .then((r) => r.json())
    .then((albums) => setFavorites(albums.filter((album) => album.isFavorite === true)))
  }, [])
  
  function addAlbumToFavorites(album){
    setFavorites([...favorites, album])
  }

  function removeFromFavorite(id){
    const updateFavorites = favorites.filter((album) => album.id !== id)
    setFavorites(updateFavorites)
  }
  console.log(favorites)

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
            <AlbumList albumsToDisplay={albumsToDisplay} onFilterChange={onFilterChange} onFavoriteClick={addAlbumToFavorites} onRemoveFromFavorites={removeFromFavorite}/>
        </Route>
        <Route path='/newalbum'>
            <NewAlbumForm onAddAlbum={addAlbum}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
