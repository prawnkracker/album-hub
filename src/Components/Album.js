import React, { useEffect, useState } from "react";

function Album({ music, onFavoriteClick, favorites }){
    const {album, artist, image, runtime, genre} = music
    const [favorited, setFavorited] = useState(false)
    
    useEffect(() => {
        const isFavorited = favorites.some((fav) => fav.album === album)
        setFavorited(isFavorited)
    }, [])

    function handleFavoriteClick(){ 
        fetch('https://project-2-json.onrender.com/favorites', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(music)
        })
        .then((r) => r.json())
        .then((data) => {
            onFavoriteClick(data)
            setFavorited(true)
        })
    }

    return (
        <div className="card">
            <h1>{album}</h1>
            <img src={image} alt='Album Cover'/>
            <p>{artist}</p>
            <p>{runtime}</p>
            <p>{genre}</p>
            <button className="favorites-button" onClick={handleFavoriteClick}>{favorited ? "Favorited ♥" : "Add To Favorites ♡"} </button>
        </div>
    )
}

export default Album;