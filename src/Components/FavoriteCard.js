import React from "react";

function FavoriteCard({ album, onRemoveFromFavorites }){
    const {albumName, image, artist, runtime, genre} = album
    
    function handleRemoveClick(){
        fetch(`http://localhost:3000/favorites/${album.id}`, {
        method: "DELETE"
        })
        .then(onRemoveFromFavorites(album.id))
    }
    return (
    <div>
        <h1>{albumName}</h1>
        <img src={image} alt='Album Cover'/>
        <p>{artist}</p>
        <p>{runtime}</p>
        <p>{genre}</p>
        <button onClick={handleRemoveClick}>Remove From Favorites</button>
    </div>
    )
}

export default FavoriteCard