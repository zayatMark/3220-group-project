import React, { Component, useState } from 'react'
import './detail-view.css';
import earth from '../images/earth.png'
import Desc from "./desc";

class Image extends Component {
    render() {
        const id = this.props.value;
        return (
            <div className = "Image">
                <div className='upper'>
                    <img src={earth} className='image' width={300} height={300} />
                    <Desc value = {id}/>
                </div>
            </div>

        )
    }
}


export default Image;