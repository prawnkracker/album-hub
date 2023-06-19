import React from "react";

function Album({ music }){
    const {album, artist, image, runtime, genres} = music

    return (
        <div>
            <h1>{album}</h1>
            <img src={image} />
            <p>{artist}</p>
            <p>{runtime}</p>
            <div>{genres.map((genre) => <span key={genre}>{genre} </span>)}</div>
        </div>
    )
}

export default Album;