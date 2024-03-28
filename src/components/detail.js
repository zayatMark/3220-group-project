/**
 * @version 1.0.0
 * adds functionality to each dropbox screen component
 * Sends unique id and dropbox id to Dropbox class 
 */


import React, { Component, useState } from 'react'
import './detail-view.css';
import Dropbox from "./dropbox";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file_id: this.props.value
        };
    }

    renderDropbox(id) {
        return (
            <div className='DropSec'>
                <Dropbox value={[id, this.state.file_id]} />
            </div>
        )
    }
    render() {
        return (
            <div className='dropbox-row'>
                {this.renderDropbox(0)}
                {this.renderDropbox(1)}
                {this.renderDropbox(2)}
            </div>
        )

    }
} 

export default Detail;