import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Importing icons to use in the
import logo from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1 className="logo-text">NOTE SWAP</h1>
      </div>

      <nav className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/notes" className="nav-link">Notes</a>
        <a href="/blogs" className="nav-link">Blogs</a>
      </nav>

      <div className="user-profile">
        <FaUserCircle className="icon" />
      </div>
      <div className="header-search">
        <FaSearch className="icon" />
      </div>

      <div className="header-buttons">
        <button className="offer-button">Offer</button>
        <button className="rent-button">Rent</button>
      </div>
    </header>
  );
};

export default Header;
