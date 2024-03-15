
/**
 * @author Eli Pardalis
 * @version 1.0.0
 * 
 * This component is responsible for maintaining and creating and displaying a list of DataItem’s, which will be displayed inside
 * VerticalDataListItem components.
 */

import React, { Component } from 'react'

import VerticalDataListItem from './VerticalDataListItem'
import DataItem from './DataItem';

import treeIcon from './imgs/Tree-Icon.jpg'
import rainIcon from './imgs/Rain-Icon.jpg'
import garbageIcon from './imgs/Garbage-Icon.jpg'

import Cookies from 'universal-cookie';

class VerticalDataList extends Component {

    constructor(props) {
        super(props)

        //List of page data for the brief descriptions of the pages
        this.dataPages =  [
            new DataItem(1, null, "Yard Waste Not Collected Service Requests", "Information on the reports of uncollected yard waste within the city."),
            new DataItem(2, treeIcon, "Tree Requests", "Data on the maintenance of municipal trees that is initiated by customer service requests."),
            new DataItem(3, null, "Street Sweeping Service Requests", "Dataset of customer initiated service requests for residential street cleaning."),
            new DataItem(4, rainIcon, "Precipitation", "Information about precipitation in the city at various locations in mm/hr."),
            new DataItem(5, null, "Dead Animal Removal Service Requests", "Data on the removal of dead dogs or cats on public property that is initiated by customer service requests."),
            new DataItem(6, garbageIcon, "Garbage & Recycling Collection", "Information on the collection boundaries for garbage and recycling within the city."),
            new DataItem(7, null, "Parks Playgrounds Service Requests", "Data about customer initiated service requests of service required for playgrounds.")
        ]

        this.componentDidMount();
    }

    componentDidMount() {
        const cookies = new Cookies();

        //Get the data from the cookie
        let dataIds = cookies.get('recent-data-ids', {path: "/"});

        //Check if the data is null
        if(dataIds == null) {
            this.data = null;
        }
        else {
            //Create an array for DataItem's
            this.data = [];
            this.data.length = dataIds.length;

            //Copy the page data into the data array using the indexs specified from the cookie
            for(let i = 0; i < this.data.length; i++) {
                this.data[this.data.length - i - 1] = this.dataPages[dataIds[i]-1];
            }
        }
    }

    render() {

        return (
            //List for the recently accessed data
            <ul style={{listStyleType:"none", padding: "0", margin: "0"}} data-testid="vertical-data-list">
                {
                    //Map each data object to it's own 
                    (this.data != null) ? this.data.map(d => <VerticalDataListItem data={d} key={`vertical-data-item-${d.getTitle()}`} />) : <li><h3 style={{textAlign:"left"}}>No recent data visited</h3> </li>
                }
            </ul>
        );
    }
}

export default VerticalDataList