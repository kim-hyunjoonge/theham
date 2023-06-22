import React, { useState } from 'react';
import '../css/layout.css';

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header className="header">
      <div className='fixed-wrap'>
        <div className='header-inner'>
          <h1 className='logo'>
            <a href='#' className='logo-img'>
              <span className='sr-only'>주식회사 더함아이덴티티</span>
            </a>
          </h1>
          <div className='header-right-wrap'>
            <ul className="btn-list">
              <li className="btn-item">
                <a href='#' className='btn-login-pc'>상담문의</a>
              </li>
            </ul>
            <div className={`btnPcNav menu-btn-wrap ${isToggled ? 'active' : ''}`} onClick={toggleMenu}>
              <div className='menu-btn'>
                <span className='line'></span>
              </div>
            </div>
          </div>
          {isToggled && (
            <div className="open-nav-wrap">
              <div className="inner-wrap">
                <ul className="menu-list-wrap">
                  <li className="menu-list">
                    <a href="#">ABOUT</a>
                  </li>
                  <li className="menu-list">
                    <a href="#">BUSINESS</a>
                  </li>
                  <li className="menu-list">
                    <a href="#">PROJECT</a>
                  </li>
                  <li className="menu-list">
                    <a href="#">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;