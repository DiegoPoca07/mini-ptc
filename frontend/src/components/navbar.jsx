import React, { useState } from 'react';
import './Navbar.css';

// Iconos importados de alguna librería como react-icons o definidos inline
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Navbar = () => {
  const [showPromo, setShowPromo] = useState(true);

  const closePromo = () => {
    setShowPromo(false);
  };

  return (
    <header className="navbar-container">
      {showPromo && (
        <div className="promo-bar">
          <div className="promo-content">
            Sign up and get 20% off to your first order. <a href="#signup" className="sign-up-link">Sign Up Now</a>
          </div>
          <button className="close-promo" onClick={closePromo}>
            <CloseIcon />
          </button>
        </div>
      )}
      
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>NaturaDeluxe</h1>
        </div>
        
        <ul className="navbar-menu">
          <li className="navbar-item dropdown">
            <a href="#shop">Shop <span className="dropdown-arrow">▼</span></a>
          </li>
          <li className="navbar-item">
            <a href="#sale">On Sale</a>
          </li>
          <li className="navbar-item">
            <a href="#new">New Arrivals</a>
          </li>
          <li className="navbar-item">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="navbar-item">
            <a href="#news">News</a>
          </li>
        </ul>
        
        <div className="navbar-search">
          <div className="search-input-container">
            <SearchIcon />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="search-input"
            />
          </div>
        </div>
        
        <div className="navbar-icons">
          <a href="#cart" className="navbar-icon">
            <CartIcon />
          </a>
          <a href="#account" className="navbar-icon">
            <UserIcon />
          </a>
        </div>
      </nav>
      
      <div className="navbar-divider"></div>
    </header>
  );
};

export default Navbar;