
import React, { Component } from 'react'

import HomeCarousel from './ImageCarousel/HomeCarousel';
import RecentList from './VerticalDataList/VerticalDataList';

class HomePage extends Component {
    render() {
        return (
            <div>
                <p style={{textAlign:"center"}} >
                    This is some random text text. <br/> I am simply typing a few lines.
                </p>
      
                <HomeCarousel />

                <div style={{ margin: "1rem 0 0 0", paddingLeft: "5%", paddingRight: "5%" }}>
                    <RecentList />
                </div>
            </div>
          );
    }
}

export default HomePage