import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary ">
      <div className="navbar-brand">
        DayBook App
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink 
            className="nav-link" 
            to="/"
            exact
          >
            Main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            className="nav-link" 
            to="/about"
          >
            About App
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar