import React, { Component, useState } from 'react'
import './detail-view.css';

import {useParams} from "react-router-dom";
import Cookies from 'universal-cookie';
import Image from "./image";
import Detail from "./detail";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />
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
        <div className= "Overview">
            {/* calls Image and Detail classes*/}     
            <Image value={id}/>
            <Detail value={id}/>
        </div>
        );
    }
}

export default withParams(Overview);
