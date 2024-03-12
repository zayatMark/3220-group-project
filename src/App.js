
import './App.css';

import React, { Component} from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import MultiDataView from './multi-data-view/multidata';
import HomePage from './HomePage/HomePage';
import Overview from './components/detail-view'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          {/* Temporary navitation list */}
          <ul style={{listStyleType:"none", backgroundColor:"rgb(200, 200, 200)", marginTop:"0", padding:"1rem"}}>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/filter-data">
                  Filter Data
              </Link>
            </li>
            <li>
              <Link to="/data">
                  View Data
              </Link>
            </li>
          </ul>

          {/* Define all routes to the various pages */}
          <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/filter-data" element={<MultiDataView />}></Route>
            <Route path="/data" element={<Overview />}></Route>
          </Routes>

        </div>
      </BrowserRouter>
    );
  }

}

export default App;
