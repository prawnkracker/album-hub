import React, { useState } from "react";

function NewAlbumForm({ onAddAlbum }){
    const [formData, setFormData] = useState({
        album: '',
        image: '',
        artist: '',
        runtime: '',
        genre: '',
    })

    function handleChange(event){
        const { name, value } = event.target;

        if (name === "runtime") {
      // Remove any non-digit characters from the input
      const formattedValue = value.replace(/\D/g, "");

      // Format the input as hh:mm:ss
        let formattedRuntime = "";
        if (formattedValue.length > 0) {
            formattedRuntime = formattedValue.replace(/(\d{2})(?=\d{2})/, "$1:");
            if (formattedValue.length > 2) {
            formattedRuntime = formattedRuntime.replace(
            /(\d{2})(?=\d{2}$)/,
            "$1:"
          );
        }
      }
        setFormData({
            ...formData,
            [name]: formattedRuntime,
        });
    } else {
         setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })}
    }

    function handleSubmit(event){
        event.preventDefault();
        const newAlbum = {
            album: formData.album,
            image: formData.image,
            artist: formData.artist,
            runtime: formData.runtime,
            genre: formData.genre
        }
        fetch('http://localhost:3000/albums', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAlbum)
        })
        .then((r) => r.json())
        .then((newAlbum) => onAddAlbum(newAlbum))
        setFormData({
            album: '',
            image: '',
            artist: '',
            runtime: '',
            genre: '',
        })
    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Album Name..." name='album' value={formData.album} onChange={handleChange}/>
                <input type="text" placeholder="Image Url..." name='image' value={formData.image} onChange={handleChange}/>
                <input type="text" placeholder="Artist Name..." name='artist' value={formData.artist} onChange={handleChange}/>
                <input type="text" maxLength='8'placeholder="Runtime(hh:mm:ss)" name='runtime' value={formData.runtime} onChange={handleChange}/>
                <input type="text" placeholder="Genre..." name='genre' value={formData.genre} onChange={handleChange}/>
                <button type="submit">Add Album!</button>
            </form>
        </div>
    )
}

export default NewAlbumForm;