
import React, {Component} from 'react'

import './VerticalDataListItem.css'

import icon from './imgs/Data-Placeholder-Image.jpg'

class RecentListDisplay extends Component {
    render() {
        return (
            //List item, styled to have a border
            <li className="list-item">
                {/* Button to click that will allow for viewing that piece of data */}
                <button className="list-button">
                    {/* Data icon centred vertically and left aligned */}
                    <span style={{verticalAlign: "middle", margin: "auto 0", padding: "0.5rem 0 0.5rem 1rem"}}>
                        <img className='list-icon' src={icon} alt="" />
                    </span>

                    {/* Data title, vertically centred */}
                    <span style={{verticalAlign: "middle", padding: "1rem", margin: "auto 0"}}>
                        <h3>Placeholder Data Set Title</h3>
                    </span>

                    {/* Data short description, vertically centred and slightly grayed out */}
                    <span style={{verticalAlign: "middle", padding: "1rem", margin: "auto 0", color: "rgb(30, 30, 30)"}}>
                        A short description of what the data set is and does. This needs to be fairly short.
                    </span>
                </button>
            </li>
        );
    }
}

export default RecentListDisplay