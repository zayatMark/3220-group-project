/**
 * @author Rocio Rueda
 * @version 1.0
 * 
 * This class with classify the different csv files in the City of Windsor portal 
 * Checks if values are being from checkbox
 */


import React, { Component } from 'react'

class Classification extends Component {
    constructor (){
        super()
        this.listOfFiles = new Map(); /** map that contains list of files per category */
        // Set values in the listOfFiles map
        this.listOfFiles.set('Environmental', [
        [1, 'Yard Waste Not Collected Service Requests', 'Text'], 
        [2, 'Tree Request', 'Text'], 
        [3, 'Street sweeping service requests', 'Text'],
        [4, 'Precipitation', 'Text'],
        [5, 'Dead Animal Removal Service Requests', 'Text'],
        [6, 'Garbage & Recycling Collection', 'Text'],
        [7, 'Parks Playgrounds Service Requests', 'Text']

        ]);
        this.listOfFiles.set('Infrustructure', []);
        this.listOfFiles.set('Legal/Issues', []);
        this.listOfFiles.set('Transportation', []);
        this.listOfFiles.set('Recreational/Educational', []);
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
                            for (const categories of values[1]){
                                if (value.includes(categories)){
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
                                if (arr.includes(media)){
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