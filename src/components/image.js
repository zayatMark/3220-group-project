/**
 * @version 1.0.0
 * this class displays the images on the detailed individual data view page
 */

import React, { Component, useState } from 'react'
import './detail-view.css';
import earth from './images/earth.png'
import Desc from "./desc";

class Image extends Component {
    render() {
        const id = this.props.value;
        return (
            <div className = "Image">
                <div className='upper'>
                    {/* displays an earth image to the screen */}
                    <img src={earth} className='image' width={300} height={300} />
                    {/* makes an instance of Desc class that contains tags and buttons */}
                    <Desc value = {id}/>
                </div>
            </div>

        )
    }
}


export default Image;