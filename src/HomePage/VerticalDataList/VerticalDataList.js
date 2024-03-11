
import React, { Component } from 'react'

import RecentListDisplay from './VerticalDataListItem'

class RecentList extends Component {
    render() {
        return (
            //List for the recently accessed data
            <ul style={{listStyleType:"none", padding: "0", margin: "0"}}>
                <RecentListDisplay />
                <RecentListDisplay />
                <RecentListDisplay />
            </ul>
        );
    }
}

export default RecentList