
import './App.css';

import React, { Component} from 'react'
import HomeCarousel from './ImageCarousel/HomeCarousel';
import MultiDataView from './multi-data-view/multidata';

class App extends Component {

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

export default App;
