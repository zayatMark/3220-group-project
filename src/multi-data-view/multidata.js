/**
 * @author Rocio Rueda
 * @version 1.0
 * 
 * This class display the components for the Multi-data view screen 
 */


import React, { Component } from 'react'
import './styles.css'; // Import the CSS file
import Classification from './filecomponents';
import logo from '../images/cityofwindsor.png';

import {
    Link
  } from "react-router-dom";

class MultiDataView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkBoxValues: [], /** contains list of checkbox values user selected */
            initialBoxes: [], /** State to store initial data */
            filteredBoxes: [], /** State to store filtered data */
        }
        this.clickHandler = this.clickHandler.bind(this); /** instantiates the clickHandler method */

        this.classification = new Classification(); //Create a classification object
    }

    /**
     * gets the list of files from Classification class
     * @return void
     */
    getData() {
        const dataArray = this.classification.getListOfFiles(); // Fetch data from Classification component

        let boxesData = []
        
        //iterates through the list of arrays in the dataArray
        for (let i = 0; i < dataArray.length; i++) {
            let boxes = {
              i: dataArray[i][0],
              data: dataArray[i][1],
              imgSrc: logo 
            };

            boxesData.push(boxes)

        }

        //updates the initialBoxes and filteredboxes list
        this.setState({ initialBoxes: boxesData, filteredBoxes: boxesData }); // Update both initial and filtered data
    
    }

    /**
     * gets the initial data when the component mounts
     * @return void
     */
    componentDidMount() {
        this.getData(); 
    }


    /**
     * gets the filtered data when "filter" button is clicked
     * @return null
     */
    clickHandler(){
        // Get checked checkboxes for 'topic' group
        const checkedTopicCheckboxes = document.querySelectorAll('input[name="topic"]:checked');
        const checkedTopicValues = Array.from(checkedTopicCheckboxes).map(checkbox => checkbox.value);

        // Get checked checkboxes for 'media' group
        const checkedMediaCheckboxes = document.querySelectorAll('input[name="media"]:checked');
        const checkedMediaValues = Array.from(checkedMediaCheckboxes).map(checkbox => checkbox.value);

        // Create a 2D array where the first level contains checked values for 'topic' and the second level contains checked values for 'media'
        //example --> const checkedValues = [['Environmental', 'Transportational'], ['Text']]; 
        const checkedValues = [checkedTopicValues, checkedMediaValues];

        const filteredData = this.classification.filterData(checkedValues);

        let boxesData = []
        
        //iterates through the list of arrays in the filteredData 
        for (let i = 0; i < filteredData.length; i++) {
            let boxes = {
              i: filteredData[i][0],
              data: filteredData[i][1],
              imgSrc: logo //change this is the future to a unique image
            };

            boxesData.push(boxes)

        }

        //updates the filteredboxes list
        this.setState({ filteredBoxes: boxesData }); 

    }

    render() {

        return (
            <div className="MultiDataView">
                {/* Container for checkboxes */}
                <div className="grayBox">
                    <div className="checkboxes">
                        {/* Column for topic checkboxes */}
                        <div className="column">
                            {/* Checkbox for Recreational/Educational */}
                            <input type="checkbox" id="topic1" name="topic" value="Recreational/Educational" />
                            <label htmlFor="topic1">RECREATIONAL/EDUCATIONAL</label>
                            <br/><br />
                            {/* Checkbox for Transportational */}
                            <input type="checkbox" id="topic2" name="topic" value="Transportation" />
                            <label htmlFor="topic2">TRANSPORTATION</label>
                            <br /><br />
                            {/* Checkbox for Legal/Issues */}
                            <input type="checkbox" id="topic3" name="topic" value="Legal/Issues" />
                            <label htmlFor="topic3">LEGAL/ISSUES</label>
                            <br /><br />
                            {/* Checkbox for Environmental */}
                            <input type="checkbox" id="topic4" name="topic" value="Environmental" />
                            <label htmlFor="topic4">ENVIRONMENTAL</label>
                            <br /><br />
                            {/* Checkbox for Infrastructure */}
                            <input type="checkbox" id="topic5" name="topic" value="Infrastructure" />
                            <label htmlFor="topic5">INFRASTRUCTURE</label>
                            <br /><br />
                        </div>
                        {/* Column for media checkboxes */}
                        <div className="column">
                            {/* Checkbox for Image */}
                            <input type="checkbox" id="media1" name="media" value="Image" />
                            <label htmlFor="media1">IMAGE</label>
                            <br /><br />
                            {/* Checkbox for Audio */}
                            <input type="checkbox" id="media2" name="media" value="Audio" />
                            <label htmlFor="media2">AUDIO</label>
                            <br/><br />
                            {/* Checkbox for Video */}
                            <input type="checkbox" id="media3" name="media" value="Video" />
                            <label htmlFor="media3">VIDEO</label>
                            <br/><br />
                            {/* Checkbox for Text */}
                            <input type="checkbox" id="media4" name="media" value="Text" />
                            <label htmlFor="media4">TEXT</label>
                            <br/><br />
                        </div>
                    </div>
                </div>
                <br />
                {/* Message display */}
                <div>{this.state.message}</div>
                {/* Filter button */}
                <button className="classificationButton" onClick={this.clickHandler}>Filter</button>
                <br />
                <br />
                {/* will initially check if the data is null*/}
                {(this.state.filteredBoxes.length > 0) ? (
                <div className="column3">
                    <div className="container">
                    {/* iterates throguh every box */}
                    {this.state.filteredBoxes.map((box, index) => (
                        <Link to={`/data/${box.i}`} className="box" key={index}>
                        <img src={box.imgSrc} style={{ width: '100px', height: 'auto' }} />
                        <br />
                        <p style={{ fontSize: '20px' }}>{box.data}</p>
                        </Link>
                    ))}
                    </div>
                </div>
                ) : (
                    <p style={{ fontSize: '20px' }}>No results available</p>
                )}
            </div>

        );
        
    }
}

export default MultiDataView