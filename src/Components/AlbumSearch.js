import React from "react";

function AlbumSearch({onSearch, search}){
       return (
        <div className="search-bar">
            <h4>Search For An Album</h4>
            <input
            type="text"
            name="search-bar"
            placeholder="Search Album..."
            value={search}
            onChange={onSearch}/>
        </div>
        )
}

export default AlbumSearch;