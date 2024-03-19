
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
import broomIcon from './imgs/Broom-Icon.jpg'
import dogIcon from './imgs/Dog-Icon.jpg'
import leafIcon from './imgs/Leaf-Icon.jpg'
import playgroundIcon from './imgs/Playground-Icon.jpg'
import alleyIcon from './imgs/Alley-Icon.jpg'
import arenaIcon from './imgs/Arena-Icon.jpg'
import buildingIcon from './imgs/Building-Icon.jpg'
import carIcon from './imgs/Car-Icon.jpg'
import communityCentreIcon from './imgs/Community-Centre-Icon.jpg'
import parkIcon from './imgs/Park-Icon.jpg'
import schoolIcon from './imgs/School-Icon.jpg'
import busIcon from './imgs/Bus-Icon.jpg'

import Cookies from 'universal-cookie';

class VerticalDataList extends Component {

    constructor(props) {
        super(props)

        //List of page data for the brief descriptions of the pages
        this.dataPages =  [
            new DataItem(1, leafIcon, "Yard Waste Not Collected Service Requests", "Information on the reports of uncollected yard waste within the city."),
            new DataItem(2, treeIcon, "Tree Requests", "Data on the maintenance of municipal trees that is initiated by customer service requests."),
            new DataItem(3, broomIcon, "Street Sweeping Service Requests", "Dataset of customer initiated service requests for residential street cleaning."),
            new DataItem(4, rainIcon, "Precipitation", "Information about precipitation in the city at various locations in mm/hr."),
            new DataItem(5, dogIcon, "Dead Animal Removal Service Requests", "Data on the removal of dead dogs or cats on public property that is initiated by customer service requests."),
            new DataItem(6, garbageIcon, "Garbage & Recycling Collection", "Information on the collection boundaries for garbage and recycling within the city."),
            new DataItem(7, playgroundIcon, "Parks Playgrounds Service Requests", "Data about customer initiated service requests of service required for playgrounds."),
            new DataItem(8, alleyIcon, "Ally Repair / Flooding Services Requests", "Information on customer initiated reports of open paved alley maintenance."),
            new DataItem(9, buildingIcon, "Building Conditions Service Requests", "Data on customer initiated service requests for unsafe building conditions in residential, apartment, industrial or commercial properties."),
            new DataItem(10, carIcon, "Abandoned Vehicle Service Requests", "A data set on customer reports of vehicles parked on roads in a state of abandonment."),
            new DataItem(11, busIcon, "Transit Bus Stops", "Data on the coordinates of bus stops, route names, route numbers, direction, bus orientation, stop ID number and information on street location for Windsor bus routes."),
            new DataItem(12, parkIcon, "Parks as Points", "Data that contains the name and coordinates of each City's Parks"),
            new DataItem(13, arenaIcon, "Arenas", "Information on the arenas in Windsor including Name, Address, URL, and X and Y coordinates."),
            new DataItem(14, schoolIcon, "Schools", "Data on the locations for various schools within the boundaries of the City of Windsor."),
            new DataItem(15, communityCentreIcon, "Community Centres", "Information on city owned and operated community centres. It lists their names, addresses, URLs, and X and Y coordinates."),
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