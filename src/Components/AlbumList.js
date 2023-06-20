import React, { useState, useEffect} from "react";
import Album from "./Album"
import GenreFilter from "./GenreFilter";

function AlbumList(){
    const [albums, setAlbums] = useState([])
    const [filter, setFilter] = useState('')

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
        <div className="ui cards">
            <h1>Album List</h1>
            <GenreFilter filter={filter} onFilterChange={onFilterChange}/>
            <ul>{albumsToDisplay.map((album) => {
                return <Album 
                key={album.id}
                music={album}/>
                })}
            </ul>
        </div>
    )
}

export default AlbumList;