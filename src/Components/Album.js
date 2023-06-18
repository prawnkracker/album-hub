import React from "react";

function Album({ music }){
    const {album, artist, image, runtime, genres} = music
    console.log(album, artist, image, runtime, genres)
}

export default Album;