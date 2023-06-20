import React from "react";

function Album({ music }){
    const {album, artist, image, runtime, genre} = music

    return (
        <div>
            <h1>{album}</h1>
            <img src={image} />
            <p>{artist}</p>
            <p>{runtime}</p>
            <p>{genre}</p>
            <button className="favorites">Add to Favorites ♡ </button>
        </div>
    )
}

export default Album;