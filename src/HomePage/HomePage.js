
/**
 * @author Eli Pardalis
 * @version 1.0.0
 * 
 * Renders all the home page elements
 */

import React, { Component } from 'react'

import HomeCarousel from './ImageCarousel/HomeCarousel';
import VerticalDataList from './VerticalDataList/VerticalDataList';

class HomePage extends Component {
    render() {
        return (
            <div>

            <div style={{margin: "1rem"}} />

                {/* Display the home page image carousel */}
                <HomeCarousel />
                
                {/* Recent data heading */}
                <h2 style={{ margin: "1rem 0 0 0", paddingLeft: "5%", paddingRight: "5%", color:"rgb(50, 50, 50)", textAlign:"left"}}>
                    Recent Data
                </h2>

                {/* List of recent data */}
                <div style={{ margin: "0.5rem 0 0 0", paddingLeft: "5%", paddingRight: "5%" }}>
                    <VerticalDataList />
                </div>

                <div style={{margin: "2rem"}} />
            </div>
          );
    }
}

export default HomePage