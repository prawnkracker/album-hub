import React from "react";

function AlbumSearch({onSearch, search}){
       return (
        <div className="search-bar">
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