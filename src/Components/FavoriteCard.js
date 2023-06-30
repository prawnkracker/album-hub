import React from "react";

function FavoriteCard({ album }){
    const {albumName, image, artist, runtime, genre} = album
    return (
    <div>
        <h1>{albumName}</h1>
        <img src={image} alt='Album Cover'/>
        <p>{artist}</p>
        <p>{runtime}</p>
        <p>{genre}</p>
    </div>
    )
}

export default FavoriteCard