import React from "react";
import Album from "./Album"
import GenreFilter from "./GenreFilter";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import AlbumSearch from "./AlbumSearch";

function AlbumList({ filter, albumsToDisplay, onFilterChange, onFavoriteClick, favorites, onSearch, search }){
    return (
        <div className="ui cards">
            <h1>Album List</h1>
            <GenreFilter filter={filter} onFilterChange={onFilterChange}/><AlbumSearch onSearch={onSearch} search={search}/>
            <ul>{albumsToDisplay.map((album) => {
                return <Album 
                key={album.id}
                music={album}
                onFavoriteClick={onFavoriteClick}
                favorites={favorites}
                />
                })}
            </ul>
            <p>Don't see your favorite album? Add it to the list and show it off to the community!</p>
        </div>
    )
}

export default AlbumList;