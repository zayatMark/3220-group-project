import React, { Component, useState } from 'react'
import './detail-view.css';
import arrow from '../images/arrow.png'
import earth from '../images/earth.png'

import {useParams} from "react-router-dom";
import Cookies from 'universal-cookie';
import { useEffect } from "react";
import Classification from "../multi-data-view/filecomponents";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />
}

class Image extends Component {
    render() {
        const id = this.props.value;
        return (
            <div className='upper'>
                <img src={earth} className='image' width={300} height={300} />
                <Desc value = {id}/>
            </div>

        )
    }
}

class Desc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptionValues: {}
        }
    }

    /**
    * gets the initial data when the component mounts
    * @return void
    */
    componentDidMount() {
        const id = this.props.value;
        this.getTags(id); 
    }

    /**
     * 
     * @param {*} id 
     * @returns array of values from file
     */
    getTags(id){
        const classification = new Classification()
        const result = classification.getIdContent(id); // Fetch data from Classification component
        this.setState({ descriptionValues: result });
        console.log(this.state.descriptionValues['Category']);
    }



    render() {

        // this.setState({descriptionValues: this.getTags(id)}); 
        return (
            <div className='desc'>
                <h1>DATA</h1>
                <h2>{this.state.descriptionValues['Description']}</h2>
                <div>
                    <button className='button'>{this.state.descriptionValues['Category']}</button>
                    {Array.isArray(this.state.descriptionValues['Medias']) && this.state.descriptionValues['Medias'].map((media, index) => (
                        <button key={index} className='button'>{media}</button>
                    ))}

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
// todo: instantiate this content from filecomponents.js
const DATA_INFO = [
    { id: 1, name: 'overview', content: '' },
    { id: 2, name: 'visualization', content: '' },
    { id: 3, name: 'usecase', content: '' }
    // etc..
];


class Dropbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isRotated: false,
            descriptionValues: [],
            dropboxId: this.props.value
        };
    }

    /**
    * gets the initial data when the component mounts
    * @return void
    */
    componentDidMount() {
        const id = this.props.value;
        this.getTags(id);
         
    }

    /**
     * 
     * @param {*} id 
     * @returns array of values from file
     */
    getTags(id){
        const classification = new Classification();
        const result = classification.getIdContent(id);
            
        //if result is illegal
        if (typeof result != 'object' || result == null || !('Overview' in result) || !('UseCase' in result) || result.length < 4) {
            console.error("Invalid result:", result);
            return; // Exit the function or handle the error appropriately
        }

        else{
            //changing the description values
            const contentValues = {
                    1: result['Overview'],
                    2: 'visualization stuff (do later)',
                    3: result['UseCase']
                    // Add more content values as needed for other names
            };

            // Iterate over DATA_INFO and set the content for each object
            DATA_INFO.forEach(item => {
                item.content = contentValues[item.id];
            });
        }
        
    }


    toggleMenu = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            isRotated: !prevState.isRotated
        }));
    };

    render() {
        const { isOpen, isRotated } = this.state;

        return (
            <div className="dropdown-menu">
                <button className="dropdown-toggle" onClick={this.toggleMenu}>
                    <span>{DATA_INFO[this.state.dropboxId].name}</span>
                    <span className={`button-icon ${isRotated ? 'rotated' : 'not-rotated'}`}>
                        <img src={arrow} className='arrow' />
                    </span>
                </button>
                {isOpen && (
                    <div className="dropdown-content">
                        {DATA_INFO[this.state.dropboxId].content}
                    </div>
                )}
            </div>
        );
    }

}

class Overview extends Component {

    //When the component mounts, update the cookie to be the most recent data ids
    componentDidMount() {
        //Max number of data items to store in the cookie
        const maxNumData = 5;

        //Get the id of the data from the url
        const {id} = this.props.params;

        const cookies = new Cookies();

        //Get the data from the cookie and if there isn't a cookie, set the data to be empty
        let dataIds = cookies.get('recent-data-ids', {path: "/"});
        if(dataIds == null) {
            dataIds = [];
        }
        
        //If the data is unique, store it into the array
        if(dataIds[dataIds.length - 1] !== id && 1 <= id && id <= 7) {
            dataIds.push(id);

            //Make a new blank array to store the finalized data
            let newDataIds = [];

            //Move the data from the old array into the new one if it is either the last item or not the same as the newest
            let oldIndex = dataIds.length - newDataIds.length;
            for(let i = 0; i < dataIds.length; i++) {
                if(dataIds[i] !== id || i === dataIds.length - 1) {
                    newDataIds.push(dataIds[i]);
                }
            }

            //If there are too many items, shift the array to remove the old one
            if(newDataIds.length > maxNumData) {
                newDataIds.shift();
            }

            //console.log(`Old`)
            //console.log(dataIds);
            //console.log(newDataIds);

            //Store the new data into the cookie
            cookies.set('recent-data-ids', newDataIds, {path: "/", expires: new Date(Date.now()+2592000), maxAge: 1000000});
        }
    }

    render() {

        const {id} = this.props.params;

        return (
        <div>
            {/* Added a temporary div to show the id, this can be removed once the id is passed to downstream components for loading */}
            <Image  value={id}/>
            <Detail value={id}/>
        </div>
        );
    }
}

export default withParams(Overview)
