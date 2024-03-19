import React, { Component, useState } from 'react'
import './detail-view.css';
import arrow from '../images/arrow.png'
import earth from '../images/earth.png'

import {useParams} from "react-router-dom";
import Cookies from 'universal-cookie';
import { useEffect } from "react";
import Classification from "../multi-data-view/filecomponents";
import DisplayCSVData from './DisplayCSVData';


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
        const classification = new Classification();
        const result = classification.getIdContent(id); // Fetch data from Classification component
        this.setState({ descriptionValues: result });
    }

    handleDownload = async () => {
        try {
            const { fileName } = this.state.descriptionValues;
            const filePath = `/${fileName}.csv`; 
            const response = await fetch(filePath); 
            const csvText = await response.text();
            const element = document.createElement('a');
            const blob = new Blob([csvText], { type: 'text/csv' });
            element.href = URL.createObjectURL(blob);
            element.download = fileName; 
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        } catch (error) {
            console.error('Error fetching or downloading CSV file:', error);
        }
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
                <button className="download" onClick={this.handleDownload}>
                    <p className="text">
                        DOWNLOAD
                    </p>
                    <div className="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
                        </svg>
                    </div>
                </button>
            </div>
        );
    }
} 

export default Desc;
