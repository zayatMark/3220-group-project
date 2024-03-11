
import React, { Component } from 'react'

import HomeCarousel from './ImageCarousel/HomeCarousel';
import VerticalDataList from './VerticalDataList/VerticalDataList';

class HomePage extends Component {
    render() {
        return (
            <div>
                <p style={{textAlign:"center"}} >
                    This is some random text text. <br/> I am simply typing a few lines.
                </p>
      
                <HomeCarousel />
                
                <h2 style={{ margin: "1rem 0 0 0", paddingLeft: "5%", paddingRight: "5%", color:"rgb(50, 50, 50)" }}>
                    Recent Data
                </h2>

                <div style={{ margin: "0.5rem 0 0 0", paddingLeft: "5%", paddingRight: "5%" }}>
                    <VerticalDataList />
                </div>

                <div style={{margin: "2rem"}} />
            </div>
          );
    }
}

export default HomePage