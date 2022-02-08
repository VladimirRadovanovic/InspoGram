
import React from 'react';
import { NavLink } from 'react-router-dom';

import LogoutButton from '../Auth/LogoutButton';
import CreatePostModal from '../Post/CreatePost';
import './NavBar.css'

const NavBar = ({user}) => {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/${user.id}`} activeClassName='active'>
            Profile
          </NavLink>
        </li>
        <li><CreatePostModal /></li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
