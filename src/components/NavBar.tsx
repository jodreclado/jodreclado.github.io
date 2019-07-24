import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../Routes';
import '../main.css';

const NavBar = () => {
  return (
    <div>
      <ul>
        {routes.map((route, index) => {
          return <li key={index}><NavLink exact to={route.path}>{route.name}</NavLink></li>
        })}
      </ul>
      <hr />
    </div>
  )
}

export default NavBar;