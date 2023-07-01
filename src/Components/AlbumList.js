import React from "react";
import Album from "./Album"
import GenreFilter from "./GenreFilter";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function AlbumList({ albumsToDisplay, onFilterChange, filter, onFavoriteClick, favorites }){
    return (
        <div className="ui cards">
            <h1>Album List</h1>
            <GenreFilter onFilterChange={onFilterChange}/>
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
            <NavLink
            to='/albumlist/newalbum'
            exact>
                Add an album
            </NavLink>
        </div>
    )
}

export default AlbumList;