import React from "react";
import FavoriteCard from "./FavoriteCard"
import GenreFilter from "./GenreFilter";

function Favorites({ favorites, onRemoveFromFavorites, onFilterChange }){
    return (
        <div>
            <h1>Your Favorite Albums!</h1>
            <GenreFilter onFilterChange={onFilterChange} />
            {favorites.map((album) => {
                return (
                    <FavoriteCard
                    key={album.id}
                    album={album}
                    onRemoveFromFavorites={onRemoveFromFavorites}
                    />
                ) 
            })}
        </div>
    )
}

export default Favorites;