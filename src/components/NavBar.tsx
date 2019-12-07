import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../Routes';

const NavBar = () => {
  return (
    <div id="nav-bar">
      <ul>
        {routes.map((route, index) => {
          return <li key={index}><NavLink exact to={route.path}>{route.name}</NavLink></li>
        })}
      </ul>
    </div>
  )
}

export default NavBar;