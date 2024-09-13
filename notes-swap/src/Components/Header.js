import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Importing icons to use in the
import logo from './logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href='/' className='header-link'>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <h1 className="logo-text">NOTE SWAP</h1>
        </div>
      </a>

      <nav className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/notes" className="nav-link notes">Notes</a>
        <a href="/blogs" className="nav-link blogs">Blogs</a>
      </nav>

      <div className='icons_div'>
        <div className="user-profile">
          <a href='/account' className='icon_class'><FaUserCircle className="icon" /></a>
        </div>

        <div className="header-search">
          <a href='/notes' className='icon_class'><FaSearch className="icon" /></a>
        </div>
      </div>

      <div className="header-buttons">
        <a href='/notes'><button className="offer-button">Offer</button></a>
        <a href='/rent'><button className="rent-button">Rent</button></a>
      </div>
    </header>
  );
};

export default Header;
