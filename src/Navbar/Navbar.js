/**
 * @version 1.0.0
 * This class handles the navigation bar components in each page of website
 */

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
            {/* login button */}
            <Link to="/login"><img src={icon} alt="Icon" className = "icon"/></Link>
          </div>
          <div className="navbar-item">
            {/* search button */}
            <input type="text" placeholder="Search..." className="search-bar"/>
          </div>
          <div className="navbar-item-language">
          <ul className="navbar-list-top">
            <li className="navbar-item">
              {/* button for french translation */}
              <Link to="." className="navbar-link">French</Link>
            </li>
            <li className="navbar-item">
              {/* button for english translation */}
              <Link href="." className="navbar-link">English</Link>
            </li>
          </ul>
          </div>
        </div>
        {/* buttons for the different navigation pages (home, about us, data, etc) */}
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


