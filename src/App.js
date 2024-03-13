
import './App.css';

import React, { Component} from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import MultiDataView from './multi-data-view/multidata';
import HomePage from './HomePage/HomePage';
import Overview from './components/detail-view'
import Navbar from './Navbar/Navbar'
import LoginForm from './LoginPage/LoginForm'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />

          {/* Define all routes to the various pages */}
          <Routes>
            <Route path="/" element={<HomePage />} ></Route>
            <Route path="/filter-data" element={<MultiDataView />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/data/:id" element={<Overview />}></Route>
          </Routes>

        </div>
      </BrowserRouter>
    );
  }

}

export default App;
