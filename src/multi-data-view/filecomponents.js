/**
 * @author Rocio Rueda
 * @version 1.0
 * 
 * This class with classify the different csv files in the City of Windsor portal 
 * Checks if values are being from checkbox
 * this class acts as the information expert
 */


import React, { Component } from 'react'

class Classification extends Component {
    constructor (){
        super()
        this.listOfFiles = new Map(); /** map that contains list of files per category */
        // Set values in the listOfFiles map
        // todo: add more information here
        this.listOfFiles.set('Environmental', [
        [1, 'Yard Waste Not Collected Service Requests', 'Information on the reports of uncollected yard waste within the city.', 'usecase content here1', ['Text', 'Videos']], 
        [2, 'Tree Request', 'Dataset of customer initiated service requests for residential street cleaning.', 'usecase content2', ['Text']], 
        [3, 'Street sweeping service requests', 'Information about precipitation in the city at various locations in mm/hr.', 'usecase content3', ['Text']],
        [4, 'Precipitation', 'Information about precipitation in the city at various locations in mm/hr.', 'usecase content4', ['Text']],
        [5, 'Dead Animal Removal Service Requests', 'Data on the removal of dead dogs or cats on public property that is initiated by customer service requests.', 'usecase content5', ['Text']],
        [6, 'Garbage & Recycling Collection', 'Information on the collection boundaries for garbage and recycling within the city.', 'usecase content6', ['Text']],
        [7, 'Parks Playgrounds Service Requests', 'Data about customer initiated service requests of service required for playgrounds.', 'usecase content7', ['Text']]

        ]);
        this.listOfFiles.set('Infrustructure', []);
        this.listOfFiles.set('Legal/Issues', []);
        this.listOfFiles.set('Transportation', []);
        this.listOfFiles.set('Recreational/Educational', []);
    }

    /**
     * gets the list of content at a certain unique id
     * @param id : int
     * @returns dictionary of content values
     */
    getIdContent(id){
        const content = {'Category': '', 'Description': '', 'Medias': [], 'Overview': '', 'UseCase': '' };
        let flag = 0; // Used to track if an id is found
        try {
            for (let key of this.listOfFiles.keys()) {
                for (let arr of this.listOfFiles.get(key)) {
                    console.log(arr);
                    console.log("array[0]:" + arr.at(0));
                    if (arr.at(0) == id) {
                        flag = -1;
                        content['Category'] = key;
                        content['Description'] = arr.at(1);
                        content['Medias'] = Array.isArray(arr.at(4)) ? arr.at(4) : [];
                        content['Overview'] = arr.at(2);
                        content['UseCase'] = arr.at(3);
                        
                        flag = -1;
                        return content;
                    }
                }
            }
            if (flag !== -1) {
                throw "ERROR: page doesn't exist";
            }
        } catch (err) {
            console.error(err);
        }

    }

    /**
     * gets all the current list of files in this portal
     * @returns list of file entries
     */
    getListOfFiles(){
        let entries = []
        //iterates through the list of values in each key
        for (let value of this.listOfFiles.values()) {
            if (value.length > 0){
                for (let arr of value) {
                    // Concatenate the arrays associated with each key
                    entries.push(arr);
                }
            }
        }
        return entries
    }

    /**
     * filters the list of files based off categories passed from values
     * @param {*} values --> ['Environmental', 'Infrustructure', '...']['videos', 'files'...]
     * @returns list of filtered file entries
     */
    filterData(values) {
        let filteredData = [];
    
        //checks if any categories at column 1 are selected
        if (values[0].length > 0){
            // Iterate through the selected categories
            for (const category of values[0]) {
                // Check if the category exists in listOfFiles
                if (this.listOfFiles.has(category)) {

                    //checks if any categories at column 2 are selected
                    if (values[1].length > 0){
                        for (const value of this.listOfFiles.get(category)){
                            //go through media options
                            for (const media of values[1]){
                                if (value.at(4).includes(media)){
                                    filteredData.push(value);
                                }
                            }
                        }
                    }
                    //none are selected at column 2
                    else{
                        // to the same line below
                        for (let values of this.listOfFiles.get(category)){
                            filteredData.push(values);
                        }
                    }

                }
            }     
        }
        //none are selected at column 1
        else{
            for (let value of this.listOfFiles.values()) {
                if (value.length > 0){
                    //iterates through every array in each value in key
                    for (let arr of value) {
                        //if there is something selected in column 2
                        if (values[1].length > 0){
                            for (const media of values[1]){
                                if (arr.at(4).includes(media)){
                                    filteredData.push(arr);
                                }
                            }
                        }
                        //case where nothing is selected in checkbox --> show everything in screen
                        else{
                            filteredData.push(arr)
                        }
                    }
                }
            }
            
        }

        return filteredData;

        }

}


export default Classification