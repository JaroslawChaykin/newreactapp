import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
      <ul>
          <li className={'navBtn'}><Link to={'/about'}>About</Link></li>
          <li className={'navBtn'}><Link to={'/posts'}>Posts</Link></li>
      </ul>
    );
};

export default NavBar;