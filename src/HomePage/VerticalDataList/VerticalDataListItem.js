
/**
 * @author Eli Pardalis
 * @version 1.0.0
 * 
 * This component is responsible for displaying a single DataItem that is given to it. It provides the layout of this item in within the
 * list and provides the functionality to click it and go to the specified data overview.
 */

import React, {Component} from 'react'

import './VerticalDataListItem.css'

import defaultIcon from './imgs/Data-Placeholder-Image.jpg'

import {
    Link
} from "react-router-dom";

class VerticalDataListItem extends Component {

    render() {
        return (
            //List item, styled to have a border
            <li className="list-item">
                {/* Link to click that will allow for viewing that piece of data */}
                <Link to={`/data/${this.props.data.getId()}`} className="list-button" onClick={this.itemClicked}>
                    <span style={{width:"35%", display: "flex"}}>
                        {/* Data icon centred vertically and left aligned */}
                        <span style={{verticalAlign: "middle", margin: "auto 0", padding: "0.5rem 0 0.5rem 1rem"}}>
                            <img className='list-icon' src={(this.props.data.getIcon() === null) ? defaultIcon : this.props.data.getIcon()} alt="" data-testid="vertical-list-icon" />
                        </span>

                        {/* Data title, vertically centred */}
                        <span style={{verticalAlign: "middle", padding: "1rem", margin: "auto 0", color: "rgb(50, 50, 50)"}}>
                            <h3> {this.props.data.getTitle()} </h3>
                        </span>
                    </span>

                    <span style={{width:"65%", display: "flex"}}>
                        {/* Data short description, vertically centred and slightly grayed out */}
                        <span style={{verticalAlign: "middle", padding: "1rem", margin: "auto 0", color: "rgb(30, 30, 30)"}}>
                            {this.props.data.getShortDescription()}
                        </span>
                    </span>
                </Link>
            </li>
        );
    }
}

export default VerticalDataListItem