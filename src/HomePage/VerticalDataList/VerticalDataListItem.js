
import React, {Component} from 'react'

import './VerticalDataListItem.css'

import defaultIcon from './imgs/Data-Placeholder-Image.jpg'

class VerticalDataListItem extends Component {

    render() {
        return (
            //List item, styled to have a border
            <li className="list-item">
                {/* Button to click that will allow for viewing that piece of data */}
                <button className="list-button">
                    <span style={{width:"35%", display: "flex"}}>
                        {/* Data icon centred vertically and left aligned */}
                        <span style={{verticalAlign: "middle", margin: "auto 0", padding: "0.5rem 0 0.5rem 1rem"}}>
                            <img className='list-icon' src={(this.props.data.getIcon() === null) ? defaultIcon : this.props.data.getIcon()} alt="" />
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
                </button>
            </li>
        );
    }
}

export default VerticalDataListItem