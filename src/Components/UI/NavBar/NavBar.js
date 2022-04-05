import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { AuthContext } from '../../../context';
import Button from '../Button/Button';

const NavBar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false)
        localStorage.getItem('auth')
    }

    return (
      <ul>
          <li className={'navBtn'}><Link to={'/about'}>About</Link></li>
          <li className={'navBtn'}><Link to={'/posts'}>Posts</Link></li>
          {
              isAuth
                ? <li className={'navBtn'}>
                    <Button cb={logout} title={"Выйти"}/>
                </li>
                : ''
          }
      </ul>
    );
};

export default NavBar;