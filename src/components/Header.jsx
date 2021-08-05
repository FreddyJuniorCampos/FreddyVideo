import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
  const { user } = useSelector(state => state);
  const hasUser = Object.keys(user).length > 0;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest({}));
  }

  return (
    <header className="header">
      <Link to="/"><img className="header__img" src={logo} alt="Platzi Video" /></Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt="" />
          }
          <p>Perfil</p>
        </div>
        <ul>

          {hasUser ? 
            <li><Link to="/">{user.name}</Link></li>
            :null
          }
          {hasUser ? 
            <li><Link to="/login" onClick={handleLogout}>Cerrar Sesión</Link></li> :            
            <li><Link to="/login">Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  )
};

export default Header;
