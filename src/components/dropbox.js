/**
 * @version 1.0.0
 * displays content from each dropbox depending on which dropbox id and unique content id is passed
 */

import React, { Component } from 'react'
import './detail-view.css';
import arrow from './images/arrow.png'
import Classification from "../multi-data-view/filecomponents";
import Data from './data';

const DATA_INFO = [
    { id: 1, name: 'overview', content: '' },
    { id: 2, name: 'visualization', content: '' },
    { id: 3, name: 'usecase', content: '' }
    // etc..
];

class Dropbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isRotated: false,
            descriptionValues: [],
            dropboxId: this.props.value[0],
            file_id: this.props.value[1]

        };
    }



    /**
    * gets the initial data when the component mounts
    * @return void
    */
    componentDidMount() {
        this.getTags(this.state.file_id);
         
    }

    /**
     * 
     * @param {*} id 
     * @returns array of values from file
     */
    getTags(id){
        const classification = new Classification();
        const result = classification.getIdContent(id);
            
        //if result is illegal
        if (typeof result != 'object' || result == null || !('Overview' in result) || !('UseCase' in result) || result.length < 4) {
            console.error("Invalid result:", result);
            return; // Exit the function or handle the error appropriately
        }

        else{
            //changing the description values
            const contentValues = {
                    1: result['Overview'],
                    2: result['fileName'],
                    3: result['UseCase']
                    // Add more content values as needed for other names
            };

            // Iterate over DATA_INFO and set the content for each object
            DATA_INFO.forEach(item => {
                item.content = contentValues[item.id];
            });
        }
        
    }

    //checks for the state of dropbox
    toggleMenu = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            isRotated: !prevState.isRotated
        }));
    };

    render() {
        const { isOpen, isRotated } = this.state;

        return (
            <div className="Dropbox">
            
                <div className="dropdown-menu">
                    <button className="dropdown-toggle" onClick={this.toggleMenu}>  

                        {/* displays the name of the dropbox and checks if it has been rotated or not */}
                        <span>{DATA_INFO[this.state.dropboxId].name}</span>
                        <span className={`button-icon ${isRotated ? 'rotated' : 'not-rotated'}`}>
                            <img src={arrow} className='arrow' />
                        </span>
                    </button>


                    {isOpen && (
                        <div>
                            {/* case: the name of dropbox is classification: need to make an instance of Data class */}
                            {DATA_INFO[this.state.dropboxId].name.toLowerCase() === 'visualization' ? (
                                <div className="dropdown-content">
                                    <Data value={this.state.file_id}/> 
                                </div>
                            ) : (
                                <div className="dropdown-content">
                                    {DATA_INFO[this.state.dropboxId].content}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }

}
export default Dropbox;