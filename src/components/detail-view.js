import React, { Component, useState } from 'react'
import './detail-view.css';
import arrow from '../images/arrow.png'
import earth from '../images/earth.png'

class Image extends Component {
    render() {
        return (
            <div className='upper'>
                <img src={earth} className='image' width={300} height={300} />
                <Desc />
            </div>

        )
    }
}

class Desc extends Component {
    render() {
        return (
            <div className='desc'>
                <h1>DATA</h1>
                <h2>Description</h2>
                <div>
                    <button className='button'>environment</button>
                    <button className='button'>Text</button>
                </div>
                <button class="download">
                    <p class="text">
                        DOWNLOAD
                    </p>
                    <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg>
                    </div>
                </button>
            </div>
        )
    }
}

class Detail extends Component {
    renderDropbox(id) {
        return (
            <div className='DropSec'>
                <Dropbox value={id} />
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

// data format
const DATA_INFO = [
    { id: 1, name: 'overview', content: 'this section is for overview' },
    { id: 2, name: 'visualization', content: 'this section is for visualization' },
    { id: 3, name: 'usecase', content: 'this section is for use cases' }
    // etc..
];


class Dropbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isRotated: false
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            isRotated: !prevState.isRotated
        }));
    };

    render() {
        const { isOpen, isRotated } = this.state;
        const dropboxId = this.props.value;

        return (
            <div className="dropdown-menu">
                <button className="dropdown-toggle" onClick={this.toggleMenu}>
                    <span>{DATA_INFO[dropboxId].name}</span>
                    <span className={`button-icon ${isRotated ? 'rotated' : 'not-rotated'}`}>
                        <img src={arrow} className='arrow' />
                    </span>
                </button>
                {isOpen && (
                    <div className="dropdown-content">
                        {DATA_INFO[dropboxId].content}
                    </div>
                )}
            </div>
        );
    }

}

class Overview extends Component {
    render() {
        return (
            <div>
                <Image />
                <Detail />
            </div>
        )
    }
}

export default Overview
