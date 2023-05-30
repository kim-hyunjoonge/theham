import React from 'react';
import '../css/layout.css'; // Header 컴포넌트의 CSS 파일을 불러옵니다.


const Header = () => {
  return (
    <header className="header">
    <h1 className="header-title">Welcome to My Website</h1>
    <nav className="header-nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);
};


export default Header;