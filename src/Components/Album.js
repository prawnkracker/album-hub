import React, { useState } from "react";

function Album({ music, onFavoriteClick }){
    const {album, artist, image, runtime, genre, isFavorite} = music
    const [favorited, setFavorited] = useState(isFavorite)

    
    function handleFavoriteClick(){
        const updatedAlbum = {...music, isFavorite: !favorited}
        
        
        fetch(`http://localhost:3000/albums/${music.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updatedAlbum)
        })
        .then((r) => r.json())
        .then((data) => setFavorited(data.isFavorite))
        
        onFavoriteClick(music)
    }

    return (
        <div>
            <h1>{album}</h1>
            <img src={image} alt='Album Cover'/>
            <p>{artist}</p>
            <p>{runtime}</p>
            <p>{genre}</p>
            <button className="favorites" onClick={handleFavoriteClick}>{favorited ? "Favorited ♥" : "Add To Favorites ♡"} </button>
        </div>
    )
}

export default Album;