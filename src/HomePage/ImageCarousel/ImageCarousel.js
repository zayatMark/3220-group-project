
/**
 * @author Eli Pardalis
 * @version 1.0.0
 * 
 * This component take a list of images and displays them in a carousel. It tracks the current index of the image to display and provides
 * controls for the user to go to the next and previous image and to select a specific image.
 */

import React, { Component } from 'react'

import { ArrowBigLeft, ArrowBigRight, Circle } from 'lucide-react'

import "./ImageCarousel.css"

class ImageCarousel extends Component {

    constructor(prop) {
        super(prop)

        this.state = {
            imageIndex: 0
        }

        this.previousImage = this.previousImage.bind(this)
        this.nextImage = this.nextImage.bind(this)
        this.setImage = this.setImage.bind(this)
    }

    /**
     * Change the imageIndex to be the previous one, wrapping around if past the beginning
     * @returns {void}
     */
    previousImage() {
        //Subtract 1 from the index and if it is out of bounds, make it the highest valid index
        let nextIndex = this.state.imageIndex - 1
        if(nextIndex < 0) {
            nextIndex = this.props.urls.length - 1
        }

        //Set the imageIndex in the state to the new index
        this.setState({imageIndex: nextIndex})
    }

    /**
     * Change the imageIndex to be the next one, wrapping around if past the end
     * @returns {void}
     */
    nextImage() {
        //Add 1 to the index and if it is out of bounds, make it the lowest valid index
        let nextIndex = this.state.imageIndex + 1
        if(nextIndex === this.props.urls.length) {
            nextIndex = 0
        }

        //Set the imageIndex in the state to the new index
        this.setState({imageIndex: nextIndex})
    }

    /**
     * Set the imageIndex to the specified index
     * @returns {void}
     */
    setImage(index) {
        this.setState({imageIndex: index})
    }

    render() {
        return (
            <div style={{width: "100%", height: "100%", margin: "0 0", position: "relative"}} >

                {/* Div to contain the list of images. overflow is hidden so that only 1 image is displayed*/}
                <div style={{width: "100%", height: "100%", overflow:"hidden", display: "flex"}}>
                    {
                        //Create an array of image elements from the array of image urls
                        //Apply a translation style to them to create the scrolling and only display one
                        this.props.urls.map(url => (
                            <img key={url} src={url} className="carousel-img" style={{translate: `${-100 * this.state.imageIndex}%`}} alt="City of Windsor"/>
                            
                        ))
                    }
                </div>                

                {/* Create the left button which will go to the previous image */}
                <button className="carousel-button carousel-left-anim" style={{left: 0}} onClick={this.previousImage} data-testid="prev-button">
                    <ArrowBigLeft />
                </button>

                {/* Create the right button which will go to the next image */}
                <button className="carousel-button carousel-right-anim" style={{right: 0}} onClick={this.nextImage} data-testid="next-button">
                    <ArrowBigRight />
                </button>

                {/* A div that honds the selection dots at the bottom */}
                <div style={{position: "absolute", bottom: "0.5rem", left: "50%", translate: "-50%", display: "flex", gap: "0.25rem"}}>
                    {
                        //Create an array of buttons, one for each image
                        this.props.urls.map((url, index) => (
                            //Use a different icon element depending on if it selected
                            <button className="carousel-dot" key={index} onClick={() => {this.setImage(index)}} data-testid={`select-button-${index}`}>
                                {(index === this.state.imageIndex) ? <Circle className="carousel-dot-selected"/> : <Circle className="carousel-dot-unselected"/>}
                            </button>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default ImageCarousel