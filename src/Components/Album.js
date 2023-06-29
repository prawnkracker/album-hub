import React, { useState } from "react";

function Album({ music }){
    const {album, artist, image, runtime, genre} = music
    const [buttonText, setButtonText] = useState('Add To Favorites ♡')

    function handleFavoriteClick(){
        if (buttonText === 'Add To Favorites ♡'){
            setButtonText('Favorited ♥')
        }
    }

    return (
        <div>
            <h1>{album}</h1>
            <img src={image} />
            <p>{artist}</p>
            <p>{runtime}</p>
            <p>{genre}</p>
            <button className="favorites" onClick={handleFavoriteClick}>{buttonText} </button>
        </div>
    )
}

export default Album;