import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>OODI</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#offers">Offers</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
