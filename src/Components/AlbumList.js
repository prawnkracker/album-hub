import React, { useState, useEffect} from "react";
import Album from "./Album"

function AlbumList(){
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/albums')
        .then((r) => r.json())
        .then((data) => setAlbums(data))
    }, [])

    return (
        <div className="ui cards">
            <h1>Album List</h1>
            <ul>{albums.map((album) => {
                return <Album 
                key={album.id}
                music={album}/>
                })}
            </ul>
        </div>
    )
}

export default AlbumList;