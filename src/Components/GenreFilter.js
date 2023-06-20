import React from "react";

function GenreFilter({ filter, onFilterChange}){
    
    return (
    <div className="filter">
        <input
        type="text"
        name="genre-filter"
        placeholder="Genre Filter..."
        value={filter}
        onChange={onFilterChange}/>
    </div>
    )
}

export default GenreFilter;