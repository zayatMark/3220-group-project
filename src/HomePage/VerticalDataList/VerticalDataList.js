
import React, { Component } from 'react'

import VerticalDataListItem from './VerticalDataListItem'
import DataItem from './DataItem';

import treeIcon from './imgs/Tree-Icon.jpg'
import rainIcon from './imgs/Rain-Icon.jpg'
import garbageIcon from './imgs/Garbage-Icon.jpg'

class VerticalDataList extends Component {

    constructor(props) {
        super(props)

        //Create the DataItem objects that will be displayed
        this.data = [
            new DataItem(treeIcon, "Tree Requests Service Requests", "Contains information on the maintenance of municipal trees that was initiated by a customer service request"),
            new DataItem(rainIcon, "Precipitation", "Contains precipitation levels for different areas around Windsor in mm/hr"),
            new DataItem(garbageIcon, "Garbage & Recycling Collection", "Contains the collection boundaries for garbage and recycling within the city.")
        ]
    }

    render() {

        return (
            //List for the recently accessed data
            <ul style={{listStyleType:"none", padding: "0", margin: "0"}}>
                {
                    //Map each data object to it's own 
                    this.data.map(d => <VerticalDataListItem data={d} key={`vertical-data-item-${d.getTitle}`} />)
                }
            </ul>
        );
    }
}

export default VerticalDataList