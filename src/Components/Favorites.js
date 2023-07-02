import React from "react";
import FavoriteCard from "./FavoriteCard"
import GenreFilter from "./GenreFilter";
import AlbumSearch from "./AlbumSearch";

function Favorites({ filter, favorites, onRemoveFromFavorites, onFilterChange, onSearch, search }){
    return (
        <div className="favorites-container">
            <h1>Your Favorite Albums!</h1>
            <GenreFilter filter={filter} onFilterChange={onFilterChange} /> <AlbumSearch onSearch={onSearch} search={search}/>
            {favorites.map((album) => {
                return (
                    <FavoriteCard
                    key={album.id}
                    music={album}
                    onRemoveFromFavorites={onRemoveFromFavorites}
                    />
                ) 
            })}
        </div>
    )
}

export default Favorites;