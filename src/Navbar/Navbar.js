import React, { Component } from 'react';
import './NavbarStyle.css';
import icon from './icon.png';

import {
  Link
} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-top">
          <div className="navbar-item">
            <p>Services</p>
          </div>
          <div className="navbar-item">
            <Link to="/login"><img src={icon} alt="Icon" className = "icon"/></Link>
          </div>
          <div className="navbar-item">
            <input type="text" placeholder="Search..." className="search-bar"/>
          </div>
          <div className="navbar-item-language">
          <ul className="navbar-list-top">
            <li className="navbar-item">
              <Link to="." className="navbar-link">French</Link>
            </li>
            <li className="navbar-item">
              <Link href="." className="navbar-link">English</Link>
            </li>
          </ul>
          </div>
        </div>
        <div className="navbar-bottom">
          <ul className="navbar-list-bottom">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="." className="navbar-link">About Us</Link>
            </li>
            <li className="navbar-item">
              <Link to="." className="navbar-link">Community</Link>
            </li>
            <li className="navbar-item">
              <Link to="#" className="navbar-link">Event</Link>
            </li>
            <li className="navbar-item">
              <Link to="/filter-data" className="navbar-link">Data</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;


