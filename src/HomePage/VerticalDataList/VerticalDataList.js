
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

class VerticalDataList extends Component {

    constructor(props) {
        super(props)

        //Create the DataItem objects that will be displayed
        this.data = [
            new DataItem(2, treeIcon, "Tree Requests Service Requests", "Contains information on the maintenance of municipal trees that was initiated by a customer service request"),
            new DataItem(4, rainIcon, "Precipitation", "Contains precipitation levels for different areas around Windsor in mm/hr"),
            new DataItem(6, garbageIcon, "Garbage & Recycling Collection", "Contains the collection boundaries for garbage and recycling within the city.")
        ]
    }

    render() {

        return (
            //List for the recently accessed data
            <ul style={{listStyleType:"none", padding: "0", margin: "0"}} data-testid="vertical-data-list">
                {
                    //Map each data object to it's own 
                    this.data.map(d => <VerticalDataListItem data={d} key={`vertical-data-item-${d.getTitle()}`} />)
                }
            </ul>
        );
    }
}

export default VerticalDataList