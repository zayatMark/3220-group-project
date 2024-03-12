import React, { Component } from 'react';
import './NavBarStyle.css';
import icon from './icon.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-top">
          <div className="navbar-item">
            <p>Services</p>
          </div>
          <div className="navbar-item">
            <img src={icon} alt="Icon" className = "icon"/>
          </div>
          <div className="navbar-item">
            <input type="text" placeholder="Search..." className="search-bar"/>
          </div>
          <div className="navbar-item-language">
          <ul className="navbar-list-top">
            <li className="navbar-item">
              <a href="#" className="navbar-link">French</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">English</a>
            </li>
          </ul>
          </div>
        </div>
        <div className="navbar-bottom">
          <ul className="navbar-list-bottom">
            <li className="navbar-item">
              <a href="#" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">About Us</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Community</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Event</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Data</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;


