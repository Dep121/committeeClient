import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <nav className={'routeHeader'}>
      <div>
        <span>
          <Link to="/">contact</Link>
        </span>
        <span>
          <Link to="/status">status</Link>
        </span>
        <span>
          <Link to="/calls">calls</Link>
        </span>
      </div>
    </nav>
  );
}

export default Header;
