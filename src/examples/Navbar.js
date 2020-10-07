import React, { useState } from 'react';
import logo from '../img/logo.png';

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const showMobile = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className='navbar has-shadow is-white'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            className='p-2'
            src={logo}
            alt='Ghost Town Logo'
            style={{ maxHeight: '70px' }}
          />
        </a>
        <a className='navbar-burger' onClick={showMobile}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div
        id='nav-links'
        className={`${toggle ? 'navbar-menu is-active' : 'navbar-menu'}`}
      >
        <div className='navbar-end'>
          <a href='/' className='navbar-item'>
            My Account
          </a>
          <a href='/' className='navbar-item'>
            About
          </a>
          <a href='/' className='navbar-item'>
            Top Sellers
          </a>
          <a href='/' className='navbar-item'>
            Shopping Card (0)
          </a>
        </div>
      </div>
    </nav>
  );
};
