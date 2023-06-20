import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink
            to='/'
            exact
            >
            Home
            </NavLink>
            <NavLink 
            to='/albumlist'
            exact>
            Album List
            </NavLink>
            <NavLink 
            to='/newalbum'
            exact>
            New Album
            </NavLink>
        </div>
    )
}

export default NavBar;