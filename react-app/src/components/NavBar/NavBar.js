
import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navigation'>
      <div>
        Logo goes here
      </div>
      <ul className='nav-links'>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/create_post' exact={true} activeClassName='active'>
            +
          </NavLink>
        </li>
        <li>
          <NavLink to='/like' exact={true} activeClassName='active'>
            Likes
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
