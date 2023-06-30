import React from "react";
import Album from "./Album"
import GenreFilter from "./GenreFilter";

function AlbumList({ albumsToDisplay, onFilterChange, filter, onFavoriteClick, onRemoveFromFavorites }){
    return (
        <div className="ui cards">
            <h1>Album List</h1>
            <GenreFilter filter={filter} onFilterChange={onFilterChange}/>
            <ul>{albumsToDisplay.map((album) => {
                return <Album 
                key={album.id}
                music={album}
                onFavoriteClick={onFavoriteClick}
                onRemoveFromFavorites={onRemoveFromFavorites}
                />
                })}
            </ul>
        </div>
    )
}

export default AlbumList;