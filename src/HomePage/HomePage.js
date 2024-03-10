
import React, { Component } from 'react'

import HomeCarousel from './ImageCarousel/HomeCarousel';

class HomePage extends Component {
    render() {
        return (
            <div>
              <p style={{textAlign:"center"}} >
                This is some random text text. <br/> I am simply typing a few lines.
              </p>
      
              <HomeCarousel />
            </div>
          );
    }
}

export default HomePage