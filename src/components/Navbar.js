import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            Sunrise DF Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            DF Search UI
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/upload" className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}>
            Upload Scenario
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
