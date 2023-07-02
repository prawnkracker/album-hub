import React from "react";

function FavoriteCard({ music, onRemoveFromFavorites }){
    const {album, image, artist, runtime, genre} = music
    
    function handleRemoveClick(){
        fetch(`http://localhost:3000/favorites/${music.id}`, {
        method: "DELETE"
        })
        .then(onRemoveFromFavorites(music.id))
    }

    return (
    <div className="favorite-card">
        <h1>{album}</h1>
        <img src={image} alt='Album Cover'/>
        <p>{artist}</p>
        <p>{runtime}</p>
        <p>{genre}</p>
        <button className="remove-favorite" onClick={handleRemoveClick} >Remove From Favorites</button>
    </div>
    )
}

export default FavoriteCard