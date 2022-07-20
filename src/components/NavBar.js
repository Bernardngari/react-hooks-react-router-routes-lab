import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return <nav className="navbar">
    <NavLink to="/">Home Page</NavLink>
    <NavLink to="/movies">Movies Page</NavLink>
    <NavLink to='/directors' >Directors Page</NavLink>
    <NavLink to='/actors'>Actors Page</NavLink>
    

  </nav>;
}

export default NavBar;
