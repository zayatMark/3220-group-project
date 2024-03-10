
import image1 from "./imgs/Windsor-Image-1.jpg"
import image2 from "./imgs/Windsor-Image-2.jpg"
import image3 from "./imgs/Windsor-Image-3.jpg"
import image4 from "./imgs/Windsor-Image-4.jpg"
import image5 from "./imgs/Windsor-Image-5.jpg"

import React, { Component } from 'react'

import ImageCarousel from "./ImageCarousel";

class HomeCarousel extends Component {

    render() {
        //Array of the images to load
        const images = [image1, image2, image3, image4, image5]
        
        return (
            //Return a div containing an image carousel of the above images
            //Setup the div's styling to scale with screen size and provide the image carousel the right amount of space
            <div style={{ maxWidth: "100vw", 
                        maxHeight: "40vh", 
                        height: "100%", 
                        aspectRatio: "32 / 9", 
                        margin: "0 auto", 
                        paddingLeft: "5%", 
                        paddingRight: "5%"
            }}>
                <ImageCarousel urls={images} />
            </div>
        );
    }
}

export default HomeCarousel