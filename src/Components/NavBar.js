import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink
            to='/'
            exact
            className='navlink'
            >
            Home
            </NavLink>
            <NavLink 
            to='/albumlist'
            exact
            className='navlink'>
            Album List
            </NavLink>
            <NavLink
            to='/favorites'
            exact
            className='navlink'>
                Favorites
            </NavLink>
            <NavLink 
            to='/albumlist/newalbum'
            exact
            className='navlink'>
            New Album
            </NavLink>
            
        </div>
    )
}

export default NavBar;