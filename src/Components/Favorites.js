import React from "react";
import FavoriteCard from "./FavoriteCard"

function Favorites({ favorites }){
    return (
        <div>
            <h1>Your Favorite Albums!</h1>
            {favorites.map((album) => {
                return (
                    <FavoriteCard
                    key={album.id}
                    album={album}
                    />
                ) 
            })}
        </div>
    )
}

export default Favorites;