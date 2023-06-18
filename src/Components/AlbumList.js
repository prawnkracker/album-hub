import React, { useState, useEffect} from "react";

function AlbumList(){
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/albums')
        .then((r) => r.json())
        .then((data) => setAlbums(data))
    }, [])

    return (
        <div>
            <h1>Album List</h1>
            <ul>{albums.map((album) => {
                return <Album 
                key={album.id}
                album={album.album}
                artist={album.artist}
                image={album.image}
                runtime={album.runtime}
                genres={genres} />
                })}
            </ul>
        </div>
    )
}

export default AlbumList;